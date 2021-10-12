import { Injectable } from '@angular/core';
import {CrudService} from "../../util/framework/crud-service";
import {ProdutorRural} from "../../model/produtor-rural";
import {ComunicacaoPerda} from "../../model/comunicacao-perda";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoPerdaService extends CrudService<ComunicacaoPerda, number>  {

  constructor(
    protected _http: HttpClient,
    private route: Router
  ) {
    super(_http, `${environment.api.baseUrl}/comunicacao-perda`);
  }

  edit(obj: any) {
    this.route.navigate(["/comunicacao-perda/cadastro-comunicacao-perda"], { queryParams: {id: obj.id, editable: true} });
  }

  validarVeracidadeComunicacaoPerda(obj: ComunicacaoPerda): Observable<ComunicacaoPerda[]> {
    return this._http.post<ComunicacaoPerda[]>(this._base.concat("/validar-veracidade-comunicacao"), obj);
  }
}
