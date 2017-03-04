import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NoContentComponent} from "./no-content/no-content.component";

export function getHomeModule() {
  return System.import('./home/home.module' + (process.env.AOT ? '.ngfactory' : ''))
    .then(mod => mod[(process.env.AOT ? 'HomeModuleNgFactory' : 'HomeModule')]);
}

export function getPostModule() {
  return System.import('./post/post.module' + (process.env.AOT ? '.ngfactory' : ''))
    .then(mod => mod[(process.env.AOT ? 'PostModuleNgFactory' : 'PostModule')]);
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: getHomeModule },
      { path: 'post', loadChildren: getPostModule },
      {path:'**',component:NoContentComponent}
    ])
  ],
})
export class AppRoutingModule { }
