import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PostComponent} from "./post.component";
import {PostResolver} from "../shared/resolvers/post.resolver";

@NgModule({
    imports: [RouterModule.forChild([
        {path:":title",component:PostComponent,resolve:[PostResolver]}
    ])],

})
export class PostRoutesModule { }
