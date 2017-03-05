import {Component, OnInit} from '@angular/core';
import {MetaDefinition, Meta} from "../../angular2-meta";
import {isBrowser} from "angular2-universal";

@Component({
    templateUrl: 'no-content.template.html'
})
export class NoContentComponent implements OnInit {
    constructor(public meta: Meta) {

    }

    ngOnInit() {


        //set desc and title
        this.meta.setTitle("Alisch.me");
        let desc: Array<MetaDefinition> = [
            {name: 'description', content: "IOT, Angular 2, Universal, MongoDB, Ali Körabbaslu"},
            {name: 'keywords', content: ""}
        ];
        this.meta.addTags(desc);

        if (isBrowser) {
            //set desc and title
            let elDesc = window.document.querySelector("meta[name=description]");
            let elKeywords = window.document.querySelector("meta[name=keywords]");

            if (elDesc) elDesc.setAttribute('content', "IOT, Angular 2, Universal, MongoDB, Ali Körabbaslu");
            if (elKeywords) elKeywords.setAttribute('content', "");
            window.document.title = 'Alisch.me';
        }
    }

}