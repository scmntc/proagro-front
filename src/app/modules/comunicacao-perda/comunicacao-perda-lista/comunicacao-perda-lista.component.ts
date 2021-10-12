import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {ComunicacaoPerdaService} from "../../../services/comunicacao-perda/comunicacao-perda.service";
import {takeUntil} from "rxjs/operators";
import {ComunicacaoPerda} from "../../../model/comunicacao-perda";
import {Subject} from "rxjs";
import {get} from 'lodash';
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
  pesquisa: string = '';
  private ngUnsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    public service: ComunicacaoPerdaService,
    private route: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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
      for (const registro of registros) {
        registro.show = true;
      }
      this.value = registros;
    });
  }

  incluirNovo() {
    this.route.navigate(["/comunicacao-perda/cadastro-comunicacao-perda"]);
  }

  excluir(comunicacaoperda: any) {
    if (comunicacaoperda) {
      this.confirmationService.confirm({
        header: 'Atenção',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        message: 'Tem certeza que deseja excluir o registro?',
        accept: (event: Event) => {
          this.aceitarExclusao(comunicacaoperda);
        }
      })
    }
  }

  onChangePesquisaCPF(event: any) {
    this.value.forEach(value => {
      if (value.produtorRural.cpf.includes(event)) {
        value.show = true;
      } else {
        value.show = false;
      }
    })
  }

  private aceitarExclusao(comunicacaoPerda: ComunicacaoPerda) {
    if (comunicacaoPerda.id != null) {
      this._loading = true;
      this.service.delete(comunicacaoPerda.id)
        .pipe(
          takeUntil(this.ngUnsubscribe$)
        ).subscribe(deleted => {
        let idx = this.value.indexOf(comunicacaoPerda);
        this.value.splice(idx, 1);
        this._loading = false;
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Registro deletado!'});
      }, error => {
        this._loading = false;
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao deletar o registro!'});
        console.log(error);
      })
    }
  }

  getScrollHeight(): string {
    let fullHeight = window.innerHeight;
    return `${fullHeight - 450}px`;
  }

  getField(obj: ComunicacaoPerda, field: string) {
    return get(obj, field);
  }

}
