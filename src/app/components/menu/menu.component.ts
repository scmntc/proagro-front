import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

const cadastroMenuModel = {
  label: 'Cadastros',
  routerLink: '/cadastro',
  icon: 'pi pi-plus'
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  @Input('showMenu')
  _showMenu: boolean = false;

  items: MenuItem[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: cadastroMenuModel.label,
        icon: cadastroMenuModel.icon,
        items: [
          {
            label: 'Produtor Rural',
            command: (event: Event) => {
              this.router.navigate([`${cadastroMenuModel.routerLink}/produtor-rural/lista-prod-rural`]);
            }
          }
        ]
      },
      {
        label: 'Operações',
        icon: 'fas fa-book-open',
        items: [
          {
            label: 'Comunicação de Perda',
            command: (event: Event) => {
              this.router.navigate(["/home"]);
            }
          },
        ]
      },
      {
        label: 'Sobre',
        icon: 'pi pi-fw pi-question',

      },
    ];
  }

}
