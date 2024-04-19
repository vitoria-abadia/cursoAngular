import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailsService {

  constructor(private http: HttpClient) { }

  verificarEmails(email: string) { 
    return this.http.get('./assets/dados/verificarEmail.json')
      .pipe(
        delay(200),
        tap(console.log),
        map((dados: { emails: any[] }) => dados.emails),
        map((dados: { email: string }[]) => dados.filter(v => v.email === email)),
        //tap(console.log),
        map((dados: any[]) => dados.length > 0 ),
        //tap(console.log)
      );
  }
}
