import { Component,ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  templateUrl:"app.template.html"
})
export class AppComponent {
  title = 'ftw';
}
