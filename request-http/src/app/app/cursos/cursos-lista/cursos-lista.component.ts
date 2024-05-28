import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';

import { Curso } from '../../models/cursos';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared/alert-modal.service';
import { CursoService } from '../../service/curso.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [CursoService],
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos!: Curso[];
  curso$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursoService,
    // private alertModalService: AlertModalService,
    // private modalService: BsModalService 
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
  }

  handleError() {
    // this.alertModalService.showAlertDanger(
    //   'Erro ao carregar cursos. Tente mais tarde',
    //   this.modalService)
  }
}
