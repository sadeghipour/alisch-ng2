import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
@Injectable()
export class PostResolver implements Resolve<any> {
    constructor(public apiService:ApiService,public activatedRoute:ActivatedRoute) {

    }

    resolve(route:ActivatedRouteSnapshot):Observable<any> | boolean{
        let params = "title="+route.params['title'];
        return this.apiService.post("/gapi/getPostByTitle",params.replace(/&/g,'%26'));
        //return this.apiService.post("/back/api/getPostByTitle",params.replace(/&/g,'%26'));
    }
}