import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';
import { Curso } from '../models/cursos';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API).pipe(
      delay(2000),
      tap(console.log)
    );
  }

  create(curso: number) { 
    return this.http.post(this.API, curso).pipe(take(1));
  }
}
