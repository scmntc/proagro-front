import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProdutorRuralCadastroComponent} from './produtor-rural-cadastro/produtor-rural-cadastro.component';
import {ProdutorRuralListaComponent} from './produtor-rural-lista/produtor-rural-lista.component';
import {RouterModule, Routes} from "@angular/router";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {BreadcrumbModule} from "primeng/breadcrumb";

const routes: Routes = [
  {
    path: '', children: [
      { path: 'lista-prod-rural', component: ProdutorRuralListaComponent },
      { path: 'cadastro-prod-rural', component: ProdutorRuralCadastroComponent }
    ]
  }
]

@NgModule({
  declarations: [
    ProdutorRuralCadastroComponent,
    ProdutorRuralListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    TableModule,
    ButtonModule,
    FormsModule,
    BreadcrumbModule
  ],
  exports: [
    ProdutorRuralCadastroComponent,
    ProdutorRuralListaComponent
  ]
})
export class ProdutorRuralModule {
}
