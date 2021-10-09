import {Component, ViewEncapsulation} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";


/* Só para simular o acesso. */
const whiteListMenu = [
  "/home",
  "/cadastro/"
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Proagro - Comunicação de Perda';


  private static showNavBar: boolean = false;

  get showNavBar() {
    return AppComponent.showNavBar;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && this.validaAcessoUrl(event.url)) {
        AppComponent.showNavBar = true;
      } else if (event instanceof NavigationStart && !this.validaAcessoUrl(event.url)) {
        AppComponent.showNavBar = false;
      }
    });
  }

  validaAcessoUrl(url: string): boolean {
    if (url) {
      let encontrou = false;
      for (let whiteListItem of whiteListMenu) {
        if (url.includes(whiteListItem)) {
          encontrou = true;
        }
      }
      return encontrou;
    }
    return false;
  }

}
