import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { Subscription, tap } from 'rxjs';
import { EnviarValoresService } from '../../../service/enviar-valores.service';

@Component({
  selector: 'app-poc-unsub',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-unsub.component.html',
  styleUrl: './poc-unsub.component.css',
})
export class PocUnsubComponent {
  nome = 'Componente com unsubscribe';
  valor!: string;

  sub: Subscription[] = [];

  constructor(private service: EnviarValoresService) {}

  ngOnInit() {
    this.sub.push(
      this.service
        .getValor()
        .pipe(tap((v) => console.log(this.nome, v)))
        .subscribe((novoValor) => (this.valor = novoValor))
    );
  }

  ngOnDestroy(): void {
    this.sub.forEach((s) => s.unsubscribe());
    console.log(`${this.nome} foi destruido`);
  }
}
