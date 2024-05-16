import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EstadosBR } from '../models/models';
import { Cidade } from '../models/cidade';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor( private http: HttpClient) { }

  getEstadosBr() {
    return this.http.get<EstadosBR[]>('assets/dados/estadosbr.json');
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    );
  }

  getCargos() { 
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'}, 
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'}, 
      { nome: 'Dev', nivel: 'Senio', desc: 'Dev Sr'}, 
    ] 
  }

  getTecnologias() { 
    return [ 
      { nome: 'Java', desc: 'Java'}, 
      { nome: 'JavaScript', desc: 'JavaScript'}, 
      { nome: 'Ruby', desc: 'Ruby'}, 
      { nome: 'PHP', desc: 'PHP'}, 
      { nome: 'TypeScript', desc: 'TypeScript'}, 
    ]
  }

  getNewsletter() { 
    return [
      { valor: 's', desc: 'Sim'}, 
      { valor: 'n', desc: 'Não'}
    ]
  }
}


