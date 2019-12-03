import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getHttpOption() {
    return new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'text/plain'
    })
  }

  public login = (login: string, password: string): Observable<string> => {
    return this.http.post<string>('http://agdatabox.md.utfpr.edu.br/quadro-api/api/auth',
      JSON.stringify({ email: login, senha: password }),
      { headers: this.getHttpOption(), responseType: 'text' as 'json' }
    );
  }
}
