import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: '[app-header]',
    templateUrl: "header.template.html"
})
export class HeaderComponent{

    constructor() {

    }

}