import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HerokuEnvService {

  constructor(private http: HttpClient) { }

  // ia utilizar para implementar o google maps.
  getEnvironmentVariablesHeroku() {
   /* this.http.get("./../assets/heroku-env.json").subscribe((data: any) => {
      if (data.mapsAPI) {
        environment.mapsAPI = data.mapsAPI;
      }
      console.log(environment, data);
    }, error => {
      console.log(error);
    })*/
  }
}
