import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CursoService } from '../../service/curso.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [AlertModalService, BsModalService],
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.css',
})
export class CursosFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private formBuild: FormBuilder,
    private cursoService: CursoService,
    private alertModalService: AlertModalService,
    private modalService: BsModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.cursoService.loadByID(id))
      )
      .subscribe((curso) => this.updateForm(curso));

    this.form = this.formBuild.group({
      id: [null],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
    });
  }

  updateForm(curso: any) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome,
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.cursoService.create(this.form.value).subscribe({
        next: (success) => {
          this.alertModalService.showAlertSuccess(
            'Curso criado com sucesso',
            this.modalService
          );
          this.location.back();
        },
        error: (error) =>
          this.alertModalService.showAlertDanger(
            'Erro ao criar curso. Tente novamente',
            this.modalService
          ),
        complete: () => console.log('request OK'),
      });
    }
  }

  onCancel() {
    this.submitted = true;
    this.form.reset();
  }
}
