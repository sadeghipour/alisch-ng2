import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {CacheService} from './cache.service';


@Injectable()
export class ApiService {
    constructor(public _http: Http, public cacheService: CacheService) {

    }

    /**
     * whatever domain/feature method name
     */
    get(url: string, options?: any) {
        return this._http.get(url, options)
            .map(res => {
                this.cacheService.set(url,res.json());
                return res.json()
            })
            .catch(err => {
                console.log('Error: ', err);
                return Observable.throw(err);
            });
    }


    post(url: string, data:any) {
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        let options = new RequestOptions({headers:headers});
        return this._http.post(url,data,options)
            .map((res:any) => {
            console.log()
                this.cacheService.set(url,res.json());
                return res.json();
            })
            .catch(err => {
                console.log('Error: ', err);
                return Observable.throw(err);
            });
    }

    getResolve(url: string, options?: any): Observable<any> {
        return this._http.get(url, options)
            .map((res: any) => {
                this.cacheService.set(url, res.json());
                return Observable.of(true);
            })
            .catch(err => {
                console.log('Error: ', err);
                return Observable.of(false);
            });
    }
    postResolve(url: string, options?: any): Observable<any> {
        return this._http.post(url, options)
            .map((res: any) => {
                this.cacheService.set(url, res.json());
                return Observable.of(true);
            })
            .catch(err => {
                console.log('Error: ', err);
                return Observable.of(false);
            });
    }

}
