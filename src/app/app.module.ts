import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from './Services/user.service';
import {AdminService} from './Services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './landingpage/navbar/navbar.component';
import { NavbarMenuComponent } from './landingpage/navbar-menu/navbar-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
    NavbarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
