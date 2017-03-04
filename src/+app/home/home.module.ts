import { NgModule } from '@angular/core';

import { HomeComponent} from './home.component';
import {LayoutModule} from "../layout/layout.module";
import {HomeRoutesModule} from "./home.route";

@NgModule({
    imports: [HomeRoutesModule,LayoutModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
