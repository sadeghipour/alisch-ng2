import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HomeResolver} from "../shared/resolvers/home.resolver";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path:"",component:HomeComponent,resolve:[HomeResolver]}
        ])
    ],

})
export class HomeRoutesModule { }
