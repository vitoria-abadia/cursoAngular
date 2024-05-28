import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValoresService } from '../../../service/enviar-valores.service';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-poc-take-until',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-take-until.component.html',
  styleUrl: './poc-take-until.component.css'
})
export class PocTakeUntilComponent {

  nome = 'Componente com takeUntil';
  valor!: string;
  unsub$ = new Subject();

  constructor(private service: EnviarValoresService) { }

  ngOnInit() {
    this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)),
        takeUntil(this.unsub$)
      )
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy(): void {
    this.unsub$.next('Unsubscribing'); // Emit a value when unsubscribing
    this.unsub$.complete();
    console.log(`${this.nome} foi destruído`);
  }


}
