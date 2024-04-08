import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AlunosModule } from './alunos/alunos.module';
import { AlunosRoutingModule } from './alunos/alunos.routing.module';
import { AuthService } from './login/Auth.service';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    BrowserModule, 
    AlunosRoutingModule, 
    FormsModule, 
    AlunosModule
  ], 
  providers: [
    AuthService, 
    AuthGuard, 
    CursosGuard
  ],
})
export class AppModule { }
