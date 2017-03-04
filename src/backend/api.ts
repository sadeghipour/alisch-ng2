var util = require('util');
var {Router} = require('express');
var async = require('async');
var request = require('request');
var https = require('https');
// Our API for demos only
import {fakeDataBase} from './db';
import {fakeDemoRedisCache} from './cache';

// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example
var baseURL = "https://alisch.me/back/api/";

// Our API for demos only
export function serverApi(req, res) {
    let key = USER_ID + '/data.json';
    let cache = fakeDemoRedisCache.get(key);
    if (cache !== undefined) {
        console.log('/data.json Cache Hit');
        return res.json(cache);
    }
    console.log('/data.json Cache Miss');

    fakeDataBase.get()
        .then(data => {
            fakeDemoRedisCache.set(key, data);
            return data;
        })
        .then(data => res.json(data));
}


// todo API

var COUNT = 4;
var TODOS = [
    { id: 0, value: 'finish example', created_at: new Date(), completed: false },
    { id: 1, value: 'add tests',      created_at: new Date(), completed: false },
    { id: 2, value: 'include development environment', created_at: new Date(), completed: false },
    { id: 3, value: 'include production environment',  created_at: new Date(), completed: false }
];

export function createTodoApi() {

    var router = Router()

    router.route('/todos')
        .get(function(req, res) {
            console.log('GET');
            // 70ms latency
            setTimeout(function() {
                res.json(TODOS);
            }, 0);

        })
        .post(function(req, res) {
            console.log('POST', util.inspect(req.body, {colors: true}));
            var todo = req.body;
            if (todo) {
                TODOS.push({
                    value: todo.value,
                    created_at: new Date(),
                    completed: todo.completed,
                    id: COUNT++
                });
                return res.json(todo);
            }

            return res.end();
        });

    router.param('todo_id', function(req, res, next, todo_id) {
        // ensure correct prop type
        var id = Number(req.params.todo_id);
        try {
            var todo = TODOS[id];
            req.todo_id = id;
            req.todo = TODOS[id];
            next();
        } catch (e) {
            next(new Error('failed to load todo'));
        }
    });

    router.route('/todos/:todo_id')
        .get(function(req, res) {
            console.log('GET', util.inspect(req.todo, {colors: true}));

            res.json(req.todo);
        })
        .put(function(req, res) {
            console.log('PUT', util.inspect(req.body, {colors: true}));

            var index = TODOS.indexOf(req.todo);
            var todo = TODOS[index] = req.body;

            res.json(todo);
        })
        .delete(function(req, res) {
            console.log('DELETE', req.todo_id);

            var index = TODOS.indexOf(req.todo);
            TODOS.splice(index, 1);

            res.json(req.todo);
        });


    router.route('/getPostByTitle').post(function (req,res){
        var title = req.body.title;
        async.series([
            function (callback) {
                var postOptions = {
                    url: baseURL+'getPostByTitle',
                    body: "title="+title.replace(/&/g,'%26'),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                    }
                };

                request.post(postOptions, function (error, response, body) {
                    if (!error && res.statusCode == 200) {
                        callback(true,JSON.parse(body));
                    }
                    else {
                        var errorJson = {
                            success:null,
                            fail :true,
                            status:null
                        };
                        callback(true,errorJson);
                    }
                });
            }

        ],function (error, result) {
            return res.json(result[0])
        })


    });

    router.route('/getAllPosts').post(function (req,res){
        async.series([
            function (callback) {
                var postOptions = {
                    url: baseURL+'getAllPosts',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                    }
                };

                request.post(postOptions, function (error, response, body) {
                    if (!error && res.statusCode == 200) {
                        callback(true,JSON.parse(body));
                    }
                    else {
                        var errorJson = {
                            success:null,
                            fail :true,
                            status:null
                        };
                        callback(true,errorJson);
                    }
                });
            }

        ],function (error, result) {
            return res.json(result[0])
        });
    });

    return router;
};
