import { NgModule } from '@angular/core';

import { HomeComponent} from './home.component';
import {LayoutModule} from "../layout/layout.module";
import {HomeRoutesModule} from "./home.route";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HomeResolver} from "../shared/resolvers/home.resolver";

@NgModule({
    imports: [HomeRoutesModule,LayoutModule,CommonModule,RouterModule,FormsModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [HomeResolver],
})
export class HomeModule { }
