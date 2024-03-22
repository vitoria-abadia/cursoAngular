import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CursosService } from './cursos/cursos.service';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [ 
    BrowserModule, 
  ], 
  providers: [CursosService, 
  provideRouter(routes, withComponentInputBinding())],
})
export class AppModule { }
