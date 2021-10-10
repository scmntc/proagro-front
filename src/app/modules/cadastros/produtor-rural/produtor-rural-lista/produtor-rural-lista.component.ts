import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {ProdutorRural} from "../../../../model/produtor-rural";
import {ProdutorRuralService} from "../../../../services/produtor-rural/produtor-rural.service";
import {Subject} from "rxjs";
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-produtor-rural-lista',
  templateUrl: './produtor-rural-lista.component.html',
  styleUrls: ['./produtor-rural-lista.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutorRuralListaComponent implements OnInit {

  ngUnsubscribe$: Subject<any> = new Subject<any>();
  value: ProdutorRural[] = [];
  cols: any[] = [];
  path: MenuItem[] = [];
  _loading: boolean = false;

  constructor(
    public service: ProdutorRuralService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private title: Title,
    private messageService: MessageService
  ) {
    this.title.setTitle("Cadastro - Produtor Rural");
  }

  ngOnInit(): void {
    this.cols = [
      {
        header: 'Nome',
        width: '30%',
        align: 'start',
        field: 'nome'
      },
      {
        header: 'E-mail',
        width: '15%',
        align: 'center',
        field: 'email'
      },
      {
        header: 'CPF',
        width: '10%',
        align: 'start',
        field: 'cpf'
      }
    ]

    this.path = [
      { icon: 'pi pi-home'},
      {label:'Cadastros'},
      {label:'Produtor Rural', routerLink: "/cadastro/produtor-rural/lista-prod-rural"}
    ];

    this.service.findAll()
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      ).subscribe((registros: ProdutorRural[]) => {
      this.value = registros;
    });
  }

  getFormatCPF(cpf: string) {
    return ProdutorRural.formatarCPF(cpf);
  }

  incluirNovo() {
    this.router.navigate(["/cadastro/produtor-rural/cadastro-prod-rural"]);
  }

  excluir(produtor: ProdutorRural) {
    if (produtor) {
      this.confirmationService.confirm({
        header: 'Atenção',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        message: 'Tem certeza que deseja excluir o registro?',
        accept: (event: Event) => {
          this.aceitarExclusao(produtor);
        }
      })
    }
  }

  private aceitarExclusao(produtor: ProdutorRural) {
    if (produtor.id != null) {
      this._loading = true;
      this.service.delete(produtor.id)
        .pipe(
          takeUntil(this.ngUnsubscribe$)
        ).subscribe(deleted => {
        let idx = this.value.indexOf(produtor);
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

}
