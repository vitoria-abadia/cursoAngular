import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './app/template-form/template-form.component';
import { DataFormComponent } from './app/data-form/data-form.component';

export const routes: Routes = [
    { 
        path: 'templateForm', 
        component: TemplateFormComponent 
    }, 
    { 
        path: 'dataForm', 
        component: DataFormComponent 
    }, 
    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'dataForm'
    }
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutingModule { }
