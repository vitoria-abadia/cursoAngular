import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app.routes';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './shared/service/dropdown.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    RouterModule, 
    RouterOutlet, 
    
  ], 
  providers: [DropdownService]
})
export class AppModule { }
