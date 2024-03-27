
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink, NgFor, RouterOutlet],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  cursos: any[] = [] ;
  pagina!: number;
  inscricao: Subscription | undefined;

    constructor(
      private cursosService: CursosService,
      private activeRoute: ActivatedRoute, 
      private router: Router) { }

    ngOnInit(): void {
      this.cursos = this.cursosService.getCursos();

      this.inscricao = this.activeRoute.queryParams.subscribe(
        (queryParams: any) => {
          this.pagina = queryParams['pagina'];
        }
      );
    }

  proximaPagina() { 
    this.router.navigate(['/cursos'], 
      {queryParams: {'pagina': ++this.pagina}});
    }
    ngOnDestroy(): void {
          this.inscricao?.unsubscribe();
       }
  }

