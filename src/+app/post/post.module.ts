import { NgModule } from '@angular/core';

import { PostComponent } from './post.component';
import {LayoutModule} from "../layout/layout.module";
import {PostRoutesModule} from "./post.routes";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PostResolver} from "../shared/resolvers/post.resolver";

@NgModule({
    imports: [LayoutModule,PostRoutesModule,CommonModule,RouterModule,FormsModule],
    exports: [],
    declarations: [PostComponent],
    providers: [PostResolver],
})
export class PostModule { }
