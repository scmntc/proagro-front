import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CdkScrollableModule, ScrollingModule} from "@angular/cdk/scrolling";
import {HttpClientModule} from "@angular/common/http";
import {SidebarModule} from "primeng/sidebar";
import { MenuComponent } from './components/menu/menu.component';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ScrollingModule,
    CdkScrollableModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
