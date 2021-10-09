import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {ProdutorRural} from "../../../../model/produtor-rural";
import {ProdutorRuralService} from "../../../../services/produtor-rural.service";
import {Subject} from "rxjs";
import {MenuItem} from "primeng/api";
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

  constructor(
    public service: ProdutorRuralService,
    private router: Router,
    private title: Title
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

  }

}
