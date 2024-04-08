import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FormDebugComponent } from "../form-debug/form-debug.component";

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
  }

  onSubmit(form: any) { 
    console.log(form);

   // console.log(this.usuario);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  verificaValidTouched(campo: { valid: any; touched: any; }) { 
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) { 
    return {
        'has-error': this.verificaValidTouched(campo), 
        'has-feedback': this.verificaValidTouched(campo)
        }
    
   
  }
}
