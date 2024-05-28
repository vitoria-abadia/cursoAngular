import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';

import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValoresService } from '../../../service/enviar-valores.service';

@Component({
  selector: 'app-poc-take',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-take.component.html',
  styleUrl: './poc-take.component.css',
})
export class PocTakeComponent implements OnInit, OnDestroy {
  nome = 'Componente com take';
  valor!: string;

  constructor(private service: EnviarValoresService) {}

  ngOnInit() {
    this.service
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        take(1)
      )
      .subscribe((novoValor) => (this.valor = novoValor));
  }

  ngOnDestroy(): void {
    console.log(`${this.nome} foi destruido`);
  }
}
