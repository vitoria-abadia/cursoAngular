import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CursoService } from '../service-cursos/curso.service';
import { Curso } from '../../models/cursos';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [RouterModule, AlertModalComponent, CommonModule],
  providers: [CursoService, BsModalService],
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  bsModalRef?: BsModalRef;
  cursos!: Curso[];
  curso$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursoService, 
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.curso$ = this.service.list()
      .pipe(
        catchError(error => {
          console.log(error);
          this.handleError();
          return EMPTY;
        })
      );
    this.service.list()
      .pipe(
        catchError(error => EMPTY)
      )
      .subscribe(
        dados => {
          console.log(dados);
        },
      );
  }

  handleError() { 
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    if (this.bsModalRef?.content) {
      this.bsModalRef.content.type = 'danger';
      this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente mais tarde';
    }
  }
}
