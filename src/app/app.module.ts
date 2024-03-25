import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { CursosService } from './cursos/cursos.service';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [],
  imports: [ 
    BrowserModule,
    FormsModule,
    CursosModule,
    AppRoutingModule
  ], 
  providers: [CursosService],
  
})
export class AppModule { }
