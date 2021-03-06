import { Injectable } from '@angular/core';
import {CrudService} from "../../util/framework/crud-service";
import {ProdutorRural} from "../../model/produtor-rural";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProdutorRuralService extends CrudService<ProdutorRural, number> {

  constructor(
    protected _http: HttpClient,
    private route: Router
  ) {
    super(_http, `${environment.api.baseUrl}/produtor-rural`);
  }

  edit(obj: any) {
    this.route.navigate(["/cadastro/produtor-rural/cadastro-prod-rural"], { queryParams: {id: obj.id, editable: true} });
  }

  findAutoComplete(pesquisa: string): Observable<ProdutorRural[]> {
    const url = `${environment.api.baseUrl}/produtor-rural/auto-complete?pesquisa=${pesquisa}`;
    return this._http.get<ProdutorRural[]>(url);
  }

}
