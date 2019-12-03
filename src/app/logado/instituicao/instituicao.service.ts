import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthUtilService } from 'src/app/auth/auth-util.service';
import { Observable, throwError } from 'rxjs';
import { Instituicao } from './Instituicao';
import { getDefaultUrl } from 'src/app/app.const';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InstituicaoService {

  result: any;

  constructor(
    private httpClient: HttpClient,
    private authUtil: AuthUtilService
  ) { }

    private getHeaders(): HttpHeaders {
      return new HttpHeaders({
        'Authorization': this.authUtil.currentTokenValue,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });
    }

    public getAll = (): Observable<Instituicao[]> => {
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('instituicao');
      return this.httpClient.get<Instituicao[]>( url, {headers: cabecalho} ).pipe(catchError(this.handleError));
    }

    public cadastrar(nomeFantasia: string, cnpj: string, campus: string) {
      const body = JSON.stringify( { nomeFantasia : nomeFantasia, cnpj: cnpj, campus: campus  } );
      console.log(body);
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('instituicao');
      return this.httpClient.post( url, body, {headers: cabecalho} ).pipe(catchError(this.handleError));

     }

     public getById(id: String) {
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('instituicao/edit/' + id);
      console.log('url getById: ' + url);
      this.result = this.httpClient.get<Instituicao>( url, {headers: cabecalho} ).pipe(catchError(this.handleError));
      return this.result;
    }

    public deletar(id: String) {
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('instituicao/' + id);
      return this.httpClient.delete<Instituicao>( url, {headers: cabecalho} ).pipe(catchError(this.handleError));
    }

    public editar(id: String, nomeFantasia: String, cnpj: String, campus: String) {
      const body = JSON.stringify({ id: id, nomeFantasia: nomeFantasia, cnpj: cnpj, campus: campus });
      console.log("enviando: " + body);
      return this.httpClient.put( getDefaultUrl('instituicao/' + id), body, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
        alert('Occoreu um erro: ' + error.error.message);
        // return an observable with a user-facing error message
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        switch (error.status) {
          case 0:
            console.log('Ocorrência já cadastrada');
            break;
          case 400:
            alert('Registro já cadastrado na api');
            break;
          case 403:
            alert('Registro já cadastrado na api');
            break;
          case 404:
            alert('Registro não existe na api');
            break;
          default:
            console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}` + '\n Contate o administrador');
        }
      }
      return throwError('Something bad happened; please try again later.');
    }
}
