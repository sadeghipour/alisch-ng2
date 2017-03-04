import {Component, OnInit, NgZone, AfterContentInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../shared/api.service";
import {CacheService} from "../shared/cache.service";
import {isBrowser} from "angular2-universal";
import {MetaDefinition, Meta} from "../../angular2-meta";

@Component({
    templateUrl: './post.template.html'
})
export class PostComponent implements OnInit,OnDestroy {



    public post: any;
    public currentIndex: number = 0;
    public activatedRouteSubscription;
    public identifier :string;
    public shortname:string = "alisch";
    constructor(public activatedRoute: ActivatedRoute, public ngZone: NgZone, public cacheService: CacheService, public router: Router, public meta: Meta) {

        this.activatedRouteSubscription= this.activatedRoute.params.subscribe((params: any) => this.ngZone.run(() => {
            {
                if (params && params.title) {
                    this.identifier = params.title;
                    this.post = this.cacheService.get("/gapi/getPostByTitle") ? this.cacheService.get("/gapi/getPostByTitle").success : null;
                    if (this.post) {
                        this.post.meta_tags = this.post.meta_tags.split(",");
                        this.meta.setTitle("Ali SadeghipourKorabaslo | Ali Körabbaslu");
                        let desc: Array<MetaDefinition> = [{name: 'description', content: this.post.title}, {
                            name: 'keywords', content: this.post.meta_tags.join()
                        }];
                        this.meta.addTags(desc);
                    }

                    else {
                        this.router.navigate(['/404']);
                    }
                }
            }
        }));

    }

    ngOnInit(): void {
        if (isBrowser) {
            //set desc and title
            let elDesc = window.document.querySelector("meta[name=description]");
            let elKeywords = window.document.querySelector("meta[name=keywords]");

            if(elDesc)elDesc.setAttribute('content', this.post.title);
            if(elKeywords)elKeywords.setAttribute('content', this.post.meta_tags.join());
            window.document.title = 'Ali SadeghipourKorabaslo | Ali Körabbaslu';
        }
    }

    nextSlide() {

    }

    prevSlide() {

    }

    isCurrentSlideIndex(num: number) {
        return this.currentIndex === num;
    }

    ngOnDestroy(): void {
        this.activatedRouteSubscription.unsubscribe();
    }
}