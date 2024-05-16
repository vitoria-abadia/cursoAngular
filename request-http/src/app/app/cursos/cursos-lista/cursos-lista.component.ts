import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CursoService } from '../service-cursos/curso.service';
import { Curso } from '../../models/cursos';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [RouterModule, HttpClientModule, NgFor],
  providers: [CursoService],
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.css',
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  
  cursos!: Curso[];

  constructor(private service: CursoService) { }

  ngOnInit(): void {
    this.service.list()
      .subscribe(dados => this.cursos = dados)
  }

}
