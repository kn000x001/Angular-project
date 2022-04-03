import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import {HttpClientModule} from '@angular/common/http';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserpostsComponent } from './userposts/userposts.component';


@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    UserinfoComponent,
    UserpostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
