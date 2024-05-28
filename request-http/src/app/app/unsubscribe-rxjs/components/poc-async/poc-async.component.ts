import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { Observable, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EnviarValoresService } from '../../../service/enviar-valores.service';

@Component({
  selector: 'app-poc-async',
  standalone: true,
  imports: [PocBaseComponent, CommonModule],
  templateUrl: './poc-async.component.html',
  styleUrl: './poc-async.component.css',
})
export class PocAsyncComponent implements OnInit, OnDestroy {
  nome = 'Componente com async';
  valor$!: Observable<string | null>;

  constructor(private service: EnviarValoresService) {}

  ngOnInit() {
    this.valor$ = this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)));
  }

  ngOnDestroy(): void {
    console.log(`${this.nome} foi destruido`);
  }
}
