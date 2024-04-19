import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';

import { FormDebugComponent } from '../form-debug/form-debug.component';
import { DropdownService } from '../shared/service/dropdown.service';
import { EstadosBR } from '../shared/models/models';
import { CepService } from '../shared/service/consulta-cep.service';
import { FormValidations } from '../shared/form.validations';
import { VerificaEmailsService } from './services/verifica-emails.service';
import { ErrorMsgComponent } from '../shared/error-msg/error-msg.component';
import { CampoControlErroComponent } from '../shared/campo-control-erro/campo-control-erro.component';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormDebugComponent, ErrorMsgComponent, CampoControlErroComponent],
  providers: [FormValidations],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})

export class DataFormComponent implements OnInit {

  form!: FormGroup;
  estados!: Observable<EstadosBR[]>;
  //cidades!: Cidade[];
  cargos!: any[];
  tecnologias!: any[];
  newsletterOp!: any[];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: CepService,
    private verificaEmailService: VerificaEmailsService
  ) { }

  ngOnInit() {

    this.dropdownService.getEstadosBr()
      .subscribe(dados => this.estados = dados);

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()
    });
  }
    /*this.form.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status => status === 'VALID' ?
          this.cepService.consultaCEP(this.form.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaDadosForm(dados) : {});

      this.form.get('endereco.estado').valueChanges
        .pipe(
          tap(estado => console.log('Novo estado: ', estado)),
          map(estado => this.estados.filter(e => e.sigla === estado)),
          map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
          switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
          tap(console.log)
        )
        .subscribe(cidades => this.cidades = cidades);

      // this.dropdownService.getCidades(8).subscribe(console.log);

    // tslint:disable-next-line:max-line-length
    // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    // [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
  }*/

 buildFrameworks() { 
  const values = this.frameworks.map(v =>  new FormControl(false)); 
  return this.formBuilder.array(values);
 }

  onSubmit() {
    console.log(this.form.value);

    let valueSubmit = Object.assign({}, this.form.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: any) => v ? this.frameworks[i] : null)
        .filter((v: null) => v !== null)
    });

    console.log(valueSubmit)

    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
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

  consultaCEP() {
    const cep = this.form.get('endereco.cep')?.value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe((dados: any) => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados:
    { logradouro: any; complemento: any; bairro: any; localidade: any; uf: any; gia: any }) {
    this.form.patchValue({
      endereco: {
        rua: dados.logradouro,
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

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.form.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1: { nome: any; nivel: any; }, obj2: { nome: any; nivel: any; }) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() {
    this.form.get('tecnologias')?.setValue(['java', 'javascript', 'php']);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmails(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }

  getFrameworksControls() {
    return this.form.get('frameworks') ? (<FormArray>this.form.get('frameworks')).controls : null;
  }
}