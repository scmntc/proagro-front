import {Component, ViewEncapsulation} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {environment} from "../environments/environment";
import {HerokuEnvService} from "./services/heroku-env/heroku-env.service";


/* Só para simular o acesso. */
const whiteListMenu = [
  "/comunicacao-perda",
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

  constructor(
    private router: Router,
    private herokuEnvService: HerokuEnvService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && this.validaAcessoUrl(event.url)) {
        AppComponent.showNavBar = true;
      } else if (event instanceof NavigationStart && !this.validaAcessoUrl(event.url)) {
        AppComponent.showNavBar = false;
      }
    });

    this.herokuEnvService.getEnvironmentVariablesHeroku();

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
