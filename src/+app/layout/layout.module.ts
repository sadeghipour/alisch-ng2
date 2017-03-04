import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
@NgModule({
    imports: [CommonModule,RouterModule,FormsModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class LayoutModule { }
