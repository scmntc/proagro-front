import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./modules/comunicacao-perda/comunicacao-perda.module').then(m => m.ComunicacaoPerdaModule) },
  { path: 'cadastro', loadChildren: () => import('./modules/cadastros/cadastros.module').then(m => m.CadastrosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
