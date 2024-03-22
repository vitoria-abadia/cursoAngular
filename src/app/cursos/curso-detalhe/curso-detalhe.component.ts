import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { StringifyOptions } from 'querystring';
import { Subscribable, Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent implements OnInit{

  id!: number; 
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private cursosService: CursosService
     ) { 
  }

  ngOnInit() { 
    this.inscricao = this.route.params.subscribe(
      (params: any) => { 
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        if (this.curso == null){
          //this.router.navigate(['/cursos/naoEncontrado']);
         }
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
