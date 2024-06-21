import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, Subject, catchError, switchMap, take } from 'rxjs';

import { Curso } from '../../models/cursos';
import { AlertModalService } from '../../shared/alert-modal.service';
import { CursoService } from '../../service/curso.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  cursos!: Curso[];
  curso$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal: any;
  cursoSelecionado!: Curso;

  constructor(
    private service: CursoService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService,
  ) // private modalService: BsModalService
  {}

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.curso$ = this.service.list().pipe(
      catchError((error) => {
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

  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso: Curso) {
  /*  this.cursoSelecionado = curso;
    const result$ = this.alertService.showConfirm(
      'Confirmação',
      'Tem certeza que deseja remover esse curso?',
      this.modalService
    );
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(curso.id) : EMPTY)
      )
      .subscribe(
        success => {
          this.onRefresh();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.', this.modalService);
        }
      );*/
  }

  onConfirmDelete() {
    this.service.remove(this.cursoSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      //error => {
      //  this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
      //  this.deleteModalRef.hide();
      //}
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
