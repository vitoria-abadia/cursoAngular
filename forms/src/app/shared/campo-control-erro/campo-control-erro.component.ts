import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-campo-control-erro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campo-control-erro.component.html',
  styleUrl: './campo-control-erro.component.css'
})
export class CampoControlErroComponent {

  @Input() msgErro!: string;
  @Input() mostrarErro!: boolean;
  @Input() formControl: FormControl | null = null;

  constructor() { }

  ngOnInit() {
  }

}