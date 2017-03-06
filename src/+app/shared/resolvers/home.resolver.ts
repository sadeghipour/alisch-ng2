import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ApiService} from "../api.service";

@Injectable()
export class HomeResolver implements Resolve<any>{

    constructor(public apiService:ApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.apiService.postResolve("/gapi/getAllPosts");
        //return this.apiService.postResolve("/back/api/getAllPosts");
    }

}