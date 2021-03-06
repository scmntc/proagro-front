import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComunicacaoPerdaComponent} from './comunicacao-perda.component';
import {RouterModule, Routes} from "@angular/router";
import {CardModule} from "primeng/card";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {ComunicacaoPerdaListaComponent} from './comunicacao-perda-lista/comunicacao-perda-lista.component';
import {TableModule} from "primeng/table";
import {ProgressBarModule} from "primeng/progressbar";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {AccordionModule} from "primeng/accordion";
import {FieldsetModule} from "primeng/fieldset";
import {DropdownModule} from "primeng/dropdown";
import {ConfirmDialogModule} from "primeng/confirmdialog";

const routes: Routes = [
  {
    path: '', children: [
      { path: 'lista-comunicacao-perda', component: ComunicacaoPerdaListaComponent },
      { path: 'cadastro-comunicacao-perda', component: ComunicacaoPerdaComponent }
    ]
  }
]

@NgModule({
  declarations: [
    ComunicacaoPerdaComponent,
    ComunicacaoPerdaListaComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        CardModule,
        AutoCompleteModule,
        ScrollingModule,
        AutoCompleteModule,
        TableModule,
        ProgressBarModule,
        BreadcrumbModule,
        ButtonModule,
        ToastModule,
        ReactiveFormsModule,
        InputTextModule,
        CalendarModule,
        AccordionModule,
        FieldsetModule,
        DropdownModule,
        ConfirmDialogModule
    ]
})
export class ComunicacaoPerdaModule { }
