import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../../models/cursos';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Curso[]>(this.API).pipe(
      tap(console.log)
    );
  }
}