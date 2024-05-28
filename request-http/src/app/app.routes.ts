import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

export const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'home'
    }, 
    { 
        path: 'cursos', 
        children: [
            { 
                path: '', 
                loadComponent: () => import('./app/cursos/cursos-lista/cursos-lista.component').then(c => c.CursosListaComponent)
            },
            { 
                path: 'novo', 
                loadComponent: () => import('./app/cursos/cursos-form/cursos-form.component').then(c => c.CursosFormComponent)
            },
            {
                path: 'editar/:id',
                loadComponent: () => import('./app/cursos/cursos-form/cursos-form.component').then(c => c.CursosFormComponent)
            }
        ]
    }, 
    {
        path: 'rxjs-poc', 
        loadComponent: () => import('./app/unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component').then(c => c.UnsubscribePocComponent)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ModalModule.forRoot(), 
        BrowserModule
    ], 
    exports: [RouterModule], 
})

export class AppRoutingModule { }
