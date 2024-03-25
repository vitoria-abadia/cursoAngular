import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent, 
        CursoNaoEncontradoComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        CursosRoutingModule
    ],
    exports: [],
    providers: [CursosService],
})
export class CursosModule {}