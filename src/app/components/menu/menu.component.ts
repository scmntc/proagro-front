import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  @Input('showMenu')
  _showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
