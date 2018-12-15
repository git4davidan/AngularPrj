import { NgModule }     from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { UserComponent } from './shared/user/user.component';
import { PostComponent } from './shared/post/post.component';

const appRoutes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'posts',  component: PostComponent },
  { path: '',   redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: UserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true } )
  ],
  exports: [
      RouterModule
            ],
  providers: []
})
export class AppRoutingModule { }
