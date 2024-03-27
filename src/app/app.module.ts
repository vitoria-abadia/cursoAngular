import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AlunosModule } from './alunos/alunos.module';
import { AlunosRoutingModule } from './alunos/alunos.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    BrowserModule, 
    AlunosModule, 
    AlunosRoutingModule, 
    FormsModule
  ]
  
})
export class AppModule { }
