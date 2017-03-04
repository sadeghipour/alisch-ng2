import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
@Injectable()
export class PostResolver implements Resolve<any> {
    constructor(public apiService:ApiService) {

    }

    resolve(route:ActivatedRouteSnapshot):Observable<any> | boolean{
        let params = "title="+route.params['title'];
        let result = this.apiService.post("/gapi/getPostByTitle",params);
        return result;
    }
}