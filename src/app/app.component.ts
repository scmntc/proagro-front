import {Component, ViewEncapsulation} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  title = 'Proagro - Comunicação de Perda';

  whiteListMenu = [
    "/home"
  ];

  private static showNavBar: boolean = false;

  get showNavBar() {
    return AppComponent.showNavBar;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && this.whiteListMenu.includes(event.url)) {
        AppComponent.showNavBar = true;
      }
    });
  }

}
