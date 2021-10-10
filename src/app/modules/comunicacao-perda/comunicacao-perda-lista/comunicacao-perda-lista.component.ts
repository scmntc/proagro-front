import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ComunicacaoPerdaService} from "../../../services/comunicacao-perda/comunicacao-perda.service";
import {takeUntil} from "rxjs/operators";
import {ComunicacaoPerda} from "../../../model/comunicacao-perda";
import {Subject} from "rxjs";
import { get } from 'lodash';
import {Router} from "@angular/router";

@Component({
  selector: 'app-comunicacao-perda-lista',
  templateUrl: './comunicacao-perda-lista.component.html',
  styleUrls: ['./comunicacao-perda-lista.component.scss']
})
export class ComunicacaoPerdaListaComponent implements OnInit {

  path: MenuItem[] = [
    { icon: 'pi pi-home'},
    {label:'Operações'},
    {label:'Comunicacação Perda', routerLink: "/cadastro/produtor-rural/lista-prod-rural"}
  ];

  value: ComunicacaoPerda[] = [];
  _loading: boolean = false;
  cols: any[] = [];
  private ngUnsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    public service: ComunicacaoPerdaService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.cols = [
      {
        header: 'Código',
        width: '10%',
        align: 'end',
        field: 'id'
      },
      {
        header: 'Data da Colheita',
        width: '10%',
        align: 'center',
        field: 'dataColheita',
        tipo: 'date'
      },
      {
        header: 'Produtor Rural',
        width: '10%',
        align: 'start',
        field: 'produtorRural.nome'
      },
      {
        header: 'Lavoura',
        width: '10%',
        align: 'start',
        field: 'tipoLavoura.descricao'
      }
    ]

    this.service.findAll()
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      ).subscribe((registros: ComunicacaoPerda[]) => {
      this.value = registros;
    });
  }

  incluirNovo() {
    this.route.navigate(["/comunicacao-perda/cadastro-comunicacao-perda"]);
  }

  excluir(comunicacaoperda: any) {

  }

  getScrollHeight(): string {
    let fullHeight = window.innerHeight;
    return `${fullHeight - 450}px`;
  }

  getField(obj: ComunicacaoPerda, field: string) {
    return get(obj, field);
  }

}
