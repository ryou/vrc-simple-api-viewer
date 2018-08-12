import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsPageComponent } from './page/friends-page/friends-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { UserDetailPageComponent } from './page/user-detail-page/user-detail-page.component';
import { InstancePageComponent } from './page/instance-page/instance-page.component';
import { AuthenticatedPageComponent } from './page/authenticated-page/authenticated-page.component';

const routes = [
  { path: '', redirectTo: '/authed/friends', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'authed', component: AuthenticatedPageComponent,
    children: [
      { path: 'friends', component: FriendsPageComponent },
      { path: 'users/:name', component: UserDetailPageComponent },
      { path: 'instance/:location', component: InstancePageComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
