import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app.routes';
import { DataFormComponent } from './app/data-form/data-form.component';

@NgModule({
  declarations: [
    DataFormComponent, 
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    RouterModule, 
    RouterOutlet
  ]
})
export class AppModule { }
