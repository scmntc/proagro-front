import {Injectable} from '@angular/core';
import {CrudService} from "../../util/framework/crud-service";
import {ProdutorRural} from "../../model/produtor-rural";
import {TipoLavoura} from "../../model/tipo-lavoura";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TipoLavouraService extends CrudService<TipoLavoura, number> {

  constructor(
    protected _http: HttpClient,
    private route: Router) {
    super(_http, `${environment.api.baseUrl}/tipo-lavoura`);
  }

  edit(obj: any): void {
  }
}
