import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { getDefaultUrl } from 'src/app/app.const';
import { catchError } from 'rxjs/operators';



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

  /*public login = (login: string, password: string): Observable<string> => {
    return this.http.post<string>('http://localhost:3000/pessoa',
      JSON.stringify({ login: login, password: password }),
      { headers: this.getHttpOption(), responseType: 'text' as 'json' }
    );
  }*/

  public login = (login: string, password: string): Observable<string> => {
    const body = JSON.stringify( { login: login, password: password } );
    console.log(body);
    console.log( getDefaultUrl('pessoa') );
    return this.http.post<string>(
      getDefaultUrl('pessoa'),
      body,
      { headers: this.getHttpOption(), responseType: 'text' as 'json'}
    ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      // return an observable with a user-facing error message
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
