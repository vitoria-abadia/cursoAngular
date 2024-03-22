import { Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'cursos', component: CursosComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: '', component: HomeComponent}
];
