import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NoContentComponent} from "./no-content/no-content.component";
import {LayoutModule} from "./layout/layout.module";


@NgModule({
  declarations: [ AppComponent,NoContentComponent ],
  imports: [
    SharedModule,
    AppRoutingModule,
      LayoutModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
