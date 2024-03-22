import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() { 
    return[
      {id: 1, name: 'Angular'}, 
      {id: 2, name: 'Java'}
    ]
  }

  getCurso(id:number) { 
    let curso = this.getCursos(); 
    for(let i=0; i<curso.length; i++) { 
      let cursos = curso[i];
      if(curso.id == id) { 
        return curso;
      }
    }
    return null;
  }

  

  constructor() { }
}
