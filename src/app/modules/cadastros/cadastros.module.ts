import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdutorRuralModule} from "./produtor-rural/produtor-rural.module";
import {RouterModule, Routes} from "@angular/router";
import {BreadcrumbModule} from "primeng/breadcrumb";

const routes: Routes = [
  { path: 'produtor-rural', loadChildren: () => import('./produtor-rural/produtor-rural.module').then(m => m.ProdutorRuralModule) }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProdutorRuralModule,
    RouterModule.forChild(routes),
  ]
})
export class CadastrosModule { }
