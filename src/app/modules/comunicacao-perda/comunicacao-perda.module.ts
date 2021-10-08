import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComunicacaoPerdaComponent} from './comunicacao-perda.component';
import {RouterModule, Routes} from "@angular/router";
import {CardModule} from "primeng/card";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ScrollingModule} from "@angular/cdk/scrolling";

const routes: Routes = [
  { path: '', component: ComunicacaoPerdaComponent }
]

@NgModule({
  declarations: [
    ComunicacaoPerdaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    AutoCompleteModule,
    ScrollingModule
  ]
})
export class ComunicacaoPerdaModule { }
