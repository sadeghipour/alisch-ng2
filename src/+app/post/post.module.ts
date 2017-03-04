import { NgModule } from '@angular/core';

import { PostComponent } from './post.component';
import {LayoutModule} from "../layout/layout.module";
import {PostRoutesModule} from "./post.routes";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PostResolver} from "../shared/resolvers/post.resolver";
import {DisqusComponent} from "../layout/disqus.component";

@NgModule({
    imports: [LayoutModule,PostRoutesModule,CommonModule,RouterModule,FormsModule],
    exports: [],
    declarations: [PostComponent,DisqusComponent],
    providers: [PostResolver],
})
export class PostModule { }
