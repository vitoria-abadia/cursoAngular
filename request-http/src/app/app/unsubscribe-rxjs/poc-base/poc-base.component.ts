import { Component, Input } from '@angular/core';
import { EnviarValoresService } from '../../service/enviar-valores.service';

@Component({
  selector: 'app-poc-base',
  standalone: true,
  imports: [],
  templateUrl: './poc-base.component.html',
  styleUrl: './poc-base.component.css'
})
export class PocBaseComponent {
  @Input() nome!: string;
  @Input() valor!: string;
  @Input() estilo!: string;

  constructor(private service: EnviarValoresService) { }

  ngOnInit() {
  }

}