import {LocalizacaoLavoura} from "./localizacao-lavoura";
import {TipoLavoura} from "./tipo-lavoura";
import {ProdutorRural} from "./produtor-rural";

export class ComunicacaoPerda {
  produtorRural: ProdutorRural = new ProdutorRural();
  eventoOcorrido: string = "CHUVA_EXCESSIVA";
  dataColheita: Date = new Date();
  tipoLavoura: TipoLavoura = new TipoLavoura();
  localizacaoLavoura: LocalizacaoLavoura = new LocalizacaoLavoura();
}
