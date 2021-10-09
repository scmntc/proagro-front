import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-autocomplete-edit',
  templateUrl: './autocomplete-edit.component.html',
  styleUrls: ['./autocomplete-edit.component.scss']
})
export class AutocompleteEditComponent implements OnInit {

  @Input('label')
  label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
