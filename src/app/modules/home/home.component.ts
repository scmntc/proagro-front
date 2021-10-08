import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  goHome() {
    this.route.navigate(["/home"]);
  }
}
