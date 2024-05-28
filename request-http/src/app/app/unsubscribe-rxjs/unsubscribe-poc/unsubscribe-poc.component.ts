import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { EnviarValoresService } from '../../service/enviar-valores.service';
import { PocBaseComponent } from '../poc-base/poc-base.component';
import { PocComponent } from '../components/poc/poc.component';
import { PocAsyncComponent } from '../components/poc-async/poc-async.component';
import { PocTakeUntilComponent } from '../components/poc-take-until/poc-take-until.component';
import { PocTakeComponent } from '../components/poc-take/poc-take.component';
import { PocUnsubComponent } from '../components/poc-unsub/poc-unsub.component';

@Component({
  selector: 'app-unsubscribe-poc',
  standalone: true,
  imports: [
    CommonModule,
    UnsubscribePocComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocBaseComponent,
  ],
  templateUrl: './unsubscribe-poc.component.html',
  styleUrl: './unsubscribe-poc.component.css',
})
export class UnsubscribePocComponent {
  mostrarComponentes = true;

  constructor(private service: EnviarValoresService) {}

  ngOnInit() {}

  emitirValor(valor: string) {
    this.service.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
