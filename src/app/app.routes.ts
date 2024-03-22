import { Routes } from '@angular/router';

import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

export const routes: Routes = [
    { path: 'cursos', component: CursosComponent }, 
    { path: 'curso/:id', component: CursoDetalheComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent}
];
