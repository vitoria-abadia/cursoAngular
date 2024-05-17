import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

import { CursoService } from '../service-cursos/curso.service';
import { Curso } from '../../models/cursos';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [RouterModule, HttpClientModule, NgFor, CommonModule],
  providers: [CursoService],
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.css',
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos!: Curso[];
  curso$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CursoService) { }

  ngOnInit(): void {
    //this.service.list()
    //   .subscribe(dados => this.cursos = dados)

    this.onRefresh();
  }

  onRefresh() {
    this.curso$ = this.service.list()
      .pipe(
        catchError(ERROR => {
          console.log(ERROR);
          this.error$.next(true);
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
      )
  }
}
