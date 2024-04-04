import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
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
}
