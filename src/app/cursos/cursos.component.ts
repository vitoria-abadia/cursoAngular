import { Component, Inject, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  cursos: any[] | undefined ;

    constructor(private cursosService: CursosService){ 
    }

    ngOnInit() { 
      this.cursos = this.cursosService.getCursos();
    }
}
