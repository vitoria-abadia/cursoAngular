import { Routes } from "@angular/router";

import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosComponent } from "./cursos/cursos.component";
import { AuthGuard } from "./guards/auth-guard";
import { CursosGuard } from "./guards/cursos.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AlunosComponent } from "./alunos/alunos.component";
import { AlunosGuard } from "./guards/alunos-guard";
import { AlunoDetalheComponent } from "./alunos/aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./alunos/aluno-form/aluno-form.component";

export const AppRoutes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    {
        path: 'alunos', 
        component: AlunosComponent, 
        //canActivateChild: [AlunosGuard], 
        children: [
            { 
                path: ':id', 
                component: AlunoDetalheComponent,
                children: [ 
                    { 
                        path: 'editar', 
                        component: AlunoFormComponent 
                    },
                    { 
                        path: 'novo', 
                        component: AlunoFormComponent 
                    }, 
                ]
            }, 
           
        ]
    },
    { 
        path: 'cursos', 
        component: CursosComponent, 
        //canActivateChild: [CursosGuard], 
        children: [
            { 
                path: ':id', 
                component: CursoDetalheComponent 
            }, 
            { 
                path: 'naoEncontrado', 
                component: CursoNaoEncontradoComponent 
            },
        ]
    }, 
];
