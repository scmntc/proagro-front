import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ComunicacaoPerda} from "../../model/comunicacao-perda";
import {ProdutorRuralService} from "../../services/produtor-rural.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {ProdutorRural} from "../../model/produtor-rural";

@Component({
  selector: 'app-comunicacao-perda',
  templateUrl: './comunicacao-perda.component.html',
  styleUrls: ['./comunicacao-perda.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComunicacaoPerdaComponent implements OnInit, OnDestroy {


  _value: ComunicacaoPerda = new ComunicacaoPerda();
  private ngUnsubscribe$: Subject<any> = new Subject<any>();

  constructor(private produtorRuralService: ProdutorRuralService) {
  }

  ngOnInit(): void {
    this.produtorRuralService.findAll()
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      ).subscribe((registros: ProdutorRural[]) => {
        console.log(registros);
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
