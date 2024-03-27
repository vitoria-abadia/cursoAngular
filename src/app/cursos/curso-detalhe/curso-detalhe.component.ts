import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../cursos.service';
import { Observable, Subscription } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [NgFor],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent {
 
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private cursosService: CursosService) { }

  ngOnInit() { 
    this.inscricao = this.route.params.subscribe(
      (params: any) => { 
        let id = params['id'];

        this.curso = this.cursosService.getCurso(id);

        if (this.curso == null){
          this.router.navigate(['/cursos/naoEncontrado']);
         }
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
