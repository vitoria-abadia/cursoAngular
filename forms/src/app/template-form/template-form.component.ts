import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FormDebugComponent } from "../form-debug/form-debug.component";
import { HttpClient } from '@angular/common/http';
import { CepService } from '../shared/service/consulta-cep.service';

@Component({
    selector: 'app-template-form',
    standalone: true,
    templateUrl: './template-form.component.html',
    styleUrl: './template-form.component.css',
    imports: [FormsModule, NgIf, FormDebugComponent, CommonModule]
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor(
    private http: HttpClient,
    private cepService: CepService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  consultaCEP(cep: string, form: NgForm) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      this.cepService.consultaCEP(cep).subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados: any, form: NgForm) {
    form.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  verificaValidTouched(campo: { valid: any; touched: any; }) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}