import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import {RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [ 
        AlunoDetalheComponent, 
        AlunoFormComponent
    ],
    imports: [ 
        CommonModule,
        AlunosRoutingModule, 
        FormsModule
    ],
    exports: [],
    providers: [AlunosService],
})
export class AlunosModule {}