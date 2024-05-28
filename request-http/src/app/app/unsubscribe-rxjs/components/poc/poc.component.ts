import { Component, OnDestroy, OnInit } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValoresService } from '../../../service/enviar-valores.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-poc',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc.component.html',
  styleUrl: './poc.component.css'
})
export class PocComponent implements OnInit, OnDestroy {

  nome = 'Componente sem unsubscribe';
  valor!: string;

  constructor(private service: EnviarValoresService) { }

  ngOnInit() {
    this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy(): void {
    console.log(`${this.nome} foi destruido`)
  }

}
