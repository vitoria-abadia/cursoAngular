import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'home'
    }, 
    { 
        path: 'cursos', 
        loadComponent: () => import('./app/cursos/cursos-lista/cursos-lista.component').then(c => c.CursosListaComponent)
    }, 
    {
        path: 'rxjs-poc', 
        loadComponent: () => import('./app/unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component').then(c => c.UnsubscribePocComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutingModule { }
