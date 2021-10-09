import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProdutorRuralCadastroComponent} from './produtor-rural-cadastro/produtor-rural-cadastro.component';
import {ProdutorRuralListaComponent} from './produtor-rural-lista/produtor-rural-lista.component';
import {RouterModule, Routes} from "@angular/router";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {InputTextModule} from "primeng/inputtext";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {ProgressBarModule} from "primeng/progressbar";

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
    BreadcrumbModule,
    InputTextModule,
    ReactiveFormsModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    ProgressBarModule
  ],
  exports: [
    ProdutorRuralCadastroComponent,
    ProdutorRuralListaComponent
  ]
})
export class ProdutorRuralModule {
}
