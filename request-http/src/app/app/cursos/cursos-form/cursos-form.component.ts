import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.css'
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  sumitted = false;

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  hasError(field: string) { 
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.sumitted = true;
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('submit');
    }
  }

  onCancel() {
    this.sumitted = true;
    this.form.reset();
  }

}
