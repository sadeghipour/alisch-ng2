import { Component, OnInit } from '@angular/core';
import {CacheService} from "../shared/cache.service";
import {Meta, MetaDefinition} from "../../angular2-meta";
import {isBrowser} from "angular2-universal";

@Component({
    templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
    public lastPosts:any;
    constructor(public cacheService:CacheService,public meta:Meta) {
        //this.lastPosts = this.cacheService.get("/gapi/getAllPosts")?this.cacheService.get("/gapi/getAllPosts").success:null;
        this.lastPosts = this.cacheService.get("/back/api/getAllPosts")?this.cacheService.get("/back/api/getAllPosts").success:null;


        //set desc and title
        this.meta.setTitle("Ali SadeghipourKorabaslo | Ali Körabbaslu");
        let desc:Array<MetaDefinition> = [
            {name: 'description', content: "IOT, Angular 2, Universal, MongoDB, Ali Körabbaslu"},
            {name: 'keywords', content: ""}
        ];
        this.meta.addTags(desc);

        if(isBrowser){
           let elDesc = window.document.querySelector("meta[name=description]");
            let elKeywords = window.document.querySelector("meta[name=keywords]");
            elDesc.setAttribute('content', 'I\'m a Code Maker');
            elKeywords.setAttribute('content', "IOT, Angular 2, Universal, MongoDB, Ali Körabbaslu");
            window.document.title = 'Ali SadeghipourKorabaslo | Ali Körabbaslu';

            window["ga"]('send', 'pageview', { page: window["location"]["pathname"] });
        }


        if(this.lastPosts){
            this.lastPosts.forEach((val,index)=>{
                if(val.description.length>250){
                    this.lastPosts[index].image = val.image[0];
                    this.lastPosts[index].description = val.description.substr(0,250)+"...";
                }
                this.lastPosts[index].link = val.title.replace(/ /g,"-");
            });
        }
    }

    ngOnInit() { }

}