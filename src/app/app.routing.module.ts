import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from "./cursos/cursos.component";
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { AlunosComponent } from "./alunos/alunos.component";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { AlunoFormComponent } from "./alunos/aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./alunos/aluno-detalhe/aluno-detalhe.component";

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch:'full'},
    {path: 'alunos', component: AlunosComponent, children: [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent }, 
        { path: 'editar', component: AlunoFormComponent }, 
    ]},
    { path: 'login', component: LoginComponent }, 
    { path: 'cursos', component: CursosComponent, children: [
        { path: ':id', component: CursoDetalheComponent }, 
        { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    ]}, 
    
    ];

@NgModule({ 
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule  { }