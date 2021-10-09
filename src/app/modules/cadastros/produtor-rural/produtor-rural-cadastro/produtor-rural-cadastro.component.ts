import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {ProdutorRuralService} from "../../../../services/produtor-rural.service";
import {ProdutorRural} from "../../../../model/produtor-rural";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {cnpj, cpf} from 'cpf-cnpj-validator'

@Component({
  selector: 'app-produtor-rural-cadastro',
  templateUrl: './produtor-rural-cadastro.component.html',
  styleUrls: ['./produtor-rural-cadastro.component.scss']
})
export class ProdutorRuralCadastroComponent implements OnInit, OnDestroy {

  private ngUnsubscribe$: Subject<any> = new Subject<any>();

  value: ProdutorRural = new ProdutorRural();
  path: MenuItem[] = [];
  _loading: boolean = false;
  formProdutor = this.fb.group({
    id: [this.value.id],
    nome: [this.value.nome, [Validators.required, Validators.nullValidator]],
    email: [this.value.email, [Validators.email, Validators.required]],
    cpf: [this.value.cpf, this.validateCpfCnpj]
  });



  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private service: ProdutorRuralService,
    private route: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.title.setTitle("Novo Cadastro - Produtor Rural");
  }

  ngOnInit(): void {
    this.carregarProdutorRuralSeNecessario();
    this.path = [
      {icon: 'pi pi-home'},
      {label: 'Cadastros'},
      {label: 'Produtor Rural', routerLink: "/cadastro/produtor-rural/lista-prod-rural"},
      {label: 'Novo'}
    ];
  }

  private carregarProdutorRuralSeNecessario() {
    this.activatedRoute.queryParams
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      ).subscribe(params => {
      if (params.id) {
        this._loading = true;
        this.service.findOne(params.id)
          .pipe(
            takeUntil(this.ngUnsubscribe$)
          ).subscribe((produtor: any) => {
            if (produtor) {
              this.title.setTitle(`Cadastro: ${produtor.id} - Produtor Rural`);
              this.updateValue(produtor[0]);
              this._loading = false;
            }
        }, error => {
            console.log(error);
            this._loading = false;
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  private updateValue(data: ProdutorRural) {
    this.formProdutor.patchValue({
      id: data.id,
      nome: data.nome,
      cpf: data.cpf,
      email: data.email
    });
  }

  cancelar() {
    this.route.navigate(["/cadastro/produtor-rural/lista-prod-rural"]);
  }

  salvar() {
    if (this.isFormularioValido()) {
      this._loading = true;
      this.service.save(this.formProdutor.value).pipe(takeUntil(this.ngUnsubscribe$)).subscribe(salvo => {
        this._loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: `O registro foi salvo com sucesso!`
        });
        this.cancelar();
      }, error => {
        this._loading = false;
        console.log(error);
      })
    }
  }

  private isFormularioValido(): boolean {
    if (!this.formProdutor.valid) {
      // @ts-ignore
      for (let control in this.formProdutor.controls) {
        if (!this.formProdutor.controls[control].valid) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Formulário Inválido',
            detail: `${control.substring(0, 1).toUpperCase()}${control.substring(1)} inválido.`
          });
        }
      }
      return this.formProdutor.valid;
    }
    return this.formProdutor.valid;
  }

  validateCpfCnpj(c: FormControl) {
    console.log(c.value.replace(/[^\d]/g, ""));
    let isValid = false;
    if (c?.value && c.value.replace(/[^\d]/g, "").length == 11) {
      isValid = cpf.isValid(c.value);
    } else if (c?.value?.replace(/[^\d]/g, "").length.length > 11) {
      isValid = cnpj.isValid(c.value);
    }
    return isValid ? null : {valid: false};
  }

}
