import { Component, OnInit } from '@angular/core';
import {CacheService} from "../shared/cache.service";

@Component({
    templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
    public lastPosts:any;
    constructor(public cacheService:CacheService) {
        this.lastPosts = this.cacheService.get("/gapi/getAllPosts")?this.cacheService.get("/gapi/getAllPosts").success:null;
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