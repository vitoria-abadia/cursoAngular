import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarValoresService {

  constructor() { }

  private emissor$ = new Subject<string>();

  emitirValor(valor:string) { 
    this.emissor$.next(valor);
  }

  getValor() { 
    return this.emissor$.asObservable();
  }

}
