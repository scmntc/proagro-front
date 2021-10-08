import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CardModule} from "primeng/card";
import {RouterModule, Routes} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";

const routes: Routes = [
  { path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
