import { Injectable } from '@angular/core';
import {CrudService} from "../util/framework/crud-service";
import {ProdutorRural} from "../model/produtor-rural";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProdutorRuralService extends CrudService<ProdutorRural, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/produtor-rural`);
  }
}
