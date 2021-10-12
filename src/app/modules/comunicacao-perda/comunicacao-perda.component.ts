import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ComunicacaoPerda} from "../../model/comunicacao-perda";
import {Subject} from "rxjs";
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Title} from "@angular/platform-browser";
import {ComunicacaoPerdaService} from "../../services/comunicacao-perda/comunicacao-perda.service";
import {FormBuilder, Validators} from "@angular/forms";
import * as moment from 'moment';
import {ProdutorRuralService} from "../../services/produtor-rural/produtor-rural.service";
import {ProdutorRural} from "../../model/produtor-rural";
import {TipoLavoura} from "../../model/tipo-lavoura";
import {TipoLavouraService} from "../../services/tipo-lavoura/tipo-lavoura.service";

@Component({
  selector: 'app-comunicacao-perda',
  templateUrl: './comunicacao-perda.component.html',
  styleUrls: ['./comunicacao-perda.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComunicacaoPerdaComponent implements OnInit, OnDestroy {


  _value: ComunicacaoPerda = new ComunicacaoPerda();
  _loading: boolean = false;
  path: MenuItem[] = [];
  private ngUnsubscribe$: Subject<any> = new Subject<any>();
  formComunicacao = this.fb.group({
    id: [this._value.id],
    produtorRural: this.fb.group({
      id: [this._value.produtorRural.id, null],
      nome: [this._value.produtorRural.nome, null],
      email: [this._value.produtorRural.email, null],
      cpf: [this._value.produtorRural.cpf, null]
    }),
    latitude: [this._value.latitude, [Validators.required]],
    longitude: [this._value.longitude, [Validators.required]],
    dataColheita: [this._value.dataColheita, [Validators.required]],
    tipoLavoura: this.fb.group({
      id: [this._value.tipoLavoura.id, null ],
      descricao: [this._value.tipoLavoura.descricao, [Validators.required]]
    }),
    eventoOcorrido: [this._value.eventoOcorrido, [Validators.nullValidator, Validators.required]]
  });
  suggestions: ProdutorRural[] = [];
  tiposLavoura: any[] = [];
  eventos = [
    {label: 'Chuva Excessiva', value: 'CHUVA_EXCESSIVA'},
    {label: 'Geada', value: 'GEADA'},
    {label: 'Granizo', value: 'GRANIZO'},
    {label: 'Seca', value: 'SECA'},
    {label: 'Vendaval', value: 'VENDAVAL'},
    {label: 'Raio', value: 'RAIO'}
  ];

  constructor(
    private service: ComunicacaoPerdaService,
    private produtorRuralService: ProdutorRuralService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private tipoLavouraService: TipoLavouraService,
    private title: Title,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
    this.path = [
      {icon: 'pi pi-home'},
      {label: 'Operações'},
      {label: 'Comunicação Perda', routerLink: "/comunicacao-perda/lista-comunicacao-perda"},
      {label: 'Cadastro'}
    ];

    this.carregarComunicacaoPerdaId();
    this.carregarTiposLavoura();
  }

  private carregarComunicacaoPerdaId() {
    this.activatedRoute.queryParams
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      ).subscribe(params => {
      if (params.id) {
        this._loading = true;
        this.service.findOne(params.id)
          .pipe(
            takeUntil(this.ngUnsubscribe$)
          ).subscribe((comunicacaoPerda: any) => {
          if (comunicacaoPerda) {
            this.title.setTitle(`Cadastro: ${comunicacaoPerda.id} - Comunicação Perda`);
            this._value = comunicacaoPerda;
            this.updateValueComunicacaoPerda(comunicacaoPerda);
            this._loading = false;
          }
        }, error => {
          console.log(error);
          this._loading = false;
        })
      }
    });
  }

  private updateValueComunicacaoPerda(comunicacaoPerda: any) {
    this.formComunicacao.patchValue({
      id: comunicacaoPerda.id,
      produtorRural: comunicacaoPerda.produtorRural,
      dataColheita: moment(comunicacaoPerda.dataColheita).toDate(),
      latitude: comunicacaoPerda.latitude,
      longitude: comunicacaoPerda.longitude,
      eventoOcorrido: comunicacaoPerda.eventoOcorrido,
      tipoLavoura: comunicacaoPerda.tipoLavoura
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  cadastrarNovoProdutor() {

  }

  onChangeTipoLavoura(event: any) {
    if (event?.value) {
      let tipoLavoura = this.tiposLavoura.filter(value => value.label.includes(event.value));
      if (tipoLavoura?.length == 1) {
        let lavoura: TipoLavoura = {
          id: tipoLavoura[0].id,
          descricao: tipoLavoura[0].label
        }
        this._value.tipoLavoura = lavoura;
        this.formComunicacao.patchValue({tipoLavoura:  lavoura});
      } else {
        this._value.tipoLavoura.id = undefined;
        this._value.tipoLavoura.descricao = event.value;
        this.formComunicacao.patchValue({tipoLavoura:   this._value.tipoLavoura});
      }
    } else {
      this._value.tipoLavoura = { descricao: '' };
    }
  }

  onChangeEventoOcorrido(event: any) {
    if (event?.value) {
      let eventoOcorrido = this.eventos.filter(value => value?.value?.includes(event.value));
      if (eventoOcorrido?.length == 1) {
        // @ts-ignore
        this._value.eventoOcorrido = eventoOcorrido[0]?.value;
        this.formComunicacao.patchValue({eventoOcorrido:  eventoOcorrido[0].value});
      } else {
        this._value.eventoOcorrido = event.value;
        this.formComunicacao.patchValue({eventoOcorrido:   this._value.tipoLavoura});
      }
    }
  }

  onSelect(event: any) {
    this.formComunicacao.patchValue({
      produtorRural: event
    })
  }

  cancelar() {
    this.route.navigate(["/comunicacao-perda/lista-comunicacao-perda"]);
  }

  searchProdutorRural(event: any) {
    if (event && event.query) {
      this.produtorRuralService.findAutoComplete(event.query)
        .pipe(
          takeUntil(this.ngUnsubscribe$)
        ).subscribe(suggestions => {
        this.suggestions = suggestions;
      })
    }
  }

  salvar(validarVeracidade: boolean = true) {
    if (this.isFormularioValido()) {
      this._loading = true;
      if (validarVeracidade) {
        this.service.validarVeracidadeComunicacaoPerda(this.formComunicacao.value)
          .pipe(takeUntil(this.ngUnsubscribe$))
          .subscribe((response: ComunicacaoPerda[]) => {
            if (response && response.length > 0) {
              let idsComunicacoesPerda = [];
              for (const comunicacaoPerda of response) {
                idsComunicacoesPerda.push(comunicacaoPerda.id);
              }
              this.confirmationService.confirm(
                {
                  accept: (event: Event) => this.salvar(false),
                  acceptLabel: 'Salvar',
                  rejectLabel: 'Cancelar',
                  message: `Existem outra(s) comunicações de perda (Código(s): ${idsComunicacoesPerda.toString().replace(",", ", ")}) com esta data que diferem de evento ocorrido, deseja continuar?`,
                  header: 'Verificação de veracidade',
                  reject: (event: Event) => {
                    this._loading = false;
                  }
                }
              )
            } else {
              this.salvar(false);
              this._loading = false;
            }
          }, error => {
            this._loading = false;
          });
      } else {
        this.service.save(this.formComunicacao.value)
          .pipe(takeUntil(this.ngUnsubscribe$))
          .subscribe(saved => {
            this._loading = false;
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: `O registro foi salvo com sucesso!`
            });
            this.cancelar();
          }, error => {
            this._loading = false;
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao salvar o registro!'});
            console.log(error);
          })

      }
    }
  }

  private isFormularioValido(): boolean {
    if (!this.formComunicacao.valid) {
      // @ts-ignore
      for (let control in this.formComunicacao.controls) {
        if (!this.formComunicacao.controls[control].valid) {
          if (control == 'tipoLavoura') {
            control = 'Tipo da Lavoura';
          }
          let mensagem = `${control.substring(0, 1).toUpperCase()}${control.substring(1)} inválido.`;
          this.messageService.add({
            severity: 'warn',
            summary: 'Formulário Inválido',
            detail: mensagem
          });
        }
      }
      return this.formComunicacao.valid;
    }
    return this.formComunicacao.valid;
  }

  private carregarTiposLavoura() {
    this.tipoLavouraService.findAll()
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      ).subscribe(tiposLavoura => {
      this.tiposLavoura = Object.values(tiposLavoura).map((key) => {
        return { label: key.descricao, value: key.descricao, id: key.id }
      })
    })
  }
}
