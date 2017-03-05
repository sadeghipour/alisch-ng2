import { Component,ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {isBrowser} from "angular2-universal";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  templateUrl:"app.template.html"
})
export class AppComponent {

}
