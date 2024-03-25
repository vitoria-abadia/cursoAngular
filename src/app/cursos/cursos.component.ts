import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';
import { CursosModule } from './cursos.module';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  cursos: any[] | undefined ;
  pagina!: number;
  inscricao: Subscription | undefined;

    constructor(
      private cursosService: CursosService,
      private route: ActivatedRoute, 
      private router: Router
      ){ 
    }

    ngOnInit() { 
      this.cursos = this.cursosService.getCursos();

      this.inscricao = this.route.queryParams.subscribe(
        (queryParams: any) => {
          this.pagina = queryParams['pagina'];
        }
      );
    }

    ngOnDestroy(): void {
      this.inscricao?.unsubscribe();
    }

    proximaPagina() { 
      //this.pagina++;
      this.router.navigate(['/cursos'], 
      {queryParams: {'pagina': ++this.pagina}});
  }

}