import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { Observable, map } from 'rxjs';
import { DropdownService } from '../shared/service/dropdown.service';
import { EstadosBR } from '../shared/models/models';
import { CepService } from '../shared/service/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormDebugComponent],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  form!: FormGroup;
  estados!: Observable<EstadosBR[]>;
  cargos!: any[];
  tecnologias!: any[];
  newsletterOp!: any[];

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder, 
    private dropdown: DropdownService, 
    private cepService: CepService) { }

  ngOnInit() {

    this.estados = this.dropdown.getEstadosBr();
    this.cargos = this.dropdown.getCargos();
    this.tecnologias = this.dropdown.getTecnologias();
    this.newsletterOp = this.dropdown.getNewsletter();

    /*this.dropdown.getEstadosBr()
      .subscribe(dados => { this.estados = dados; 
        console.log(dados);
      })*/

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null], 
      tecnologias: [null], 
      newsletter: ['s']
    })
  }

  consultaCEP() {
    const cep = this.form.get('endereco.cep')?.value;
  
    if (cep != null && cep !== '') { 
      this.cepService.consultaCEP(cep).subscribe((dados: any) => this.populaDadosForm(dados));
    } else {
      console.error('Campo de CEP não encontrado ou está vazio no formulário.');
    }
  }

  populaDadosForm(dados:
    { logradouro: any; complemento: any; bairro: any; localidade: any; uf: any; gia: any }) {
    this.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        numero: dados.gia,
        // cep: dados.cep, 
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm() {
    this.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  onSubmit() {
    console.log(this.form.value);

    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
        .pipe(map(res => res))
        .subscribe({
          next: dados => {
            console.log(dados);
            this.reset();
          },
          error: error => {
            console.error('Erro ao enviar o formulário:', error);
            alert('Erro ao enviar o formulário!');
          }
        });
    } else {
      console.log("Formulário inválido");
      this.validacaoForm(this.form);
    }
  }

  validacaoForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo)
      const controle = formGroup.get(campo);
      controle?.markAsDirty();

      if (controle instanceof FormGroup) {
        this.validacaoForm(controle);
      }
    })
  }

  reset() {
    this.form.reset();
  }

  verificaValidTouched(campo: any) {
    return !this.form.get(campo)?.valid && this.form.get(campo)?.touched
      || !this.form.get(campo)?.valid && this.form.get(campo)?.dirty;
  }

  verificaEmailInvalido() {
    let campoEmail = this.form.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email']
        && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  setarCargo() { 
    const cargo =  { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'}; 
    this.form.get('cargo')?.setValue(cargo)
  }

  compararCargos(obj1: { nome: any; nivel: any; }, obj2: { nome: any; nivel: any; }) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() { 
    this.form.get('tecnologias')?.setValue(['java', 'javaScript'])
  }

}
