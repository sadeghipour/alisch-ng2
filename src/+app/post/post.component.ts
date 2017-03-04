import {Component, OnInit, NgZone} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../shared/api.service";
import {CacheService} from "../shared/cache.service";

@Component({
    templateUrl: './post.template.html'
})
export class PostComponent implements OnInit {
    public post:any;
    public currentIndex:number = 0;
    constructor(public activatedRoute:ActivatedRoute,public ngZone:NgZone,public cacheService:CacheService,public router:Router) {
        this.activatedRoute.params.subscribe((params: any) =>this.ngZone.run(() => {
            {
                if (params && params.title) {
                    this.post = this.cacheService.get("/gapi/getPostByTitle")?this.cacheService.get("/gapi/getPostByTitle").success:null;
                    if(this.post){
                        this.post.meta_tags = this.post.meta_tags.split(",");
                    }
                    else {
                        this.router.navigate(['/404']);
                    }
                }
            }
        }));

    }

    ngOnInit() {

    }

    nextSlide(){

    }

    prevSlide(){

    }

    isCurrentSlideIndex(num:number){
        return this.currentIndex===num;
    }

}