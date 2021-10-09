import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteEditComponent } from './autocomplete-edit.component';
import {AutoCompleteModule} from "primeng/autocomplete";



@NgModule({
  declarations: [
    AutocompleteEditComponent
  ],
  exports: [
    AutocompleteEditComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteModule
  ]
})
export class AutocompleteEditModule { }
