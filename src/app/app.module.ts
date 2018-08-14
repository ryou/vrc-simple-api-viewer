import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FriendsPageComponent } from './page/friends-page/friends-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersComponent } from './component/users/users.component';
import { UserDetailPageComponent } from './page/user-detail-page/user-detail-page.component';
import { InstancePageComponent } from './page/instance-page/instance-page.component';
import { JsonViewerComponent } from './component/json-viewer/json-viewer.component';
import { AuthenticatedPageComponent } from './page/authenticated-page/authenticated-page.component';
import { FriendListComponent } from './page/authenticated-page/components/friend-list/friend-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsPageComponent,
    LoginPageComponent,
    UsersComponent,
    UserDetailPageComponent,
    InstancePageComponent,
    JsonViewerComponent,
    AuthenticatedPageComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
