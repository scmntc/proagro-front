import {TipoLavoura} from "./tipo-lavoura";
import {ProdutorRural} from "./produtor-rural";

export class ComunicacaoPerda {
  id?: number;
  produtorRural: ProdutorRural = new ProdutorRural();
  eventoOcorrido: string = "CHUVA_EXCESSIVA";
  dataColheita: Date = new Date();
  tipoLavoura: TipoLavoura = new TipoLavoura();
  latitude: string = "";
  longitude: string = "";
  show: boolean = true;  /* Somente para exibição */
}
