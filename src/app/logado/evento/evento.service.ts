import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthUtilService } from 'src/app/auth/auth-util.service';
import { Observable, throwError } from 'rxjs';
import { Evento } from './Evento';
import { getDefaultUrl } from 'src/app/app.const';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventoService {

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

    public getAll = (): Observable<Evento[]> => {
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('evento');
      return this.httpClient.get<Evento[]>( url, {headers: cabecalho} ).pipe(catchError(this.handleError));
    }

    public deletar(id: String) {
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('evento/' + id);
      return this.httpClient.delete<Evento>( url, {headers: cabecalho} ).pipe(catchError(this.handleError));
    }

    public deletarAtv(id: String) {
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('atividade/' + id);
      return this.httpClient.delete<Evento>( url, {headers: cabecalho} ).pipe(catchError(this.handleError));
    }

    /*public cadastrar(nomeFantasia: string, cnpj: string, campus: string) {
      const body = JSON.stringify( { nomeFantasia : nomeFantasia, cnpj: cnpj, campus: campus  } );
      console.log(body);
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('instituicao');
      return this.httpClient.post( url, body, {headers: cabecalho} ).pipe(catchError(this.handleError));

    }*/

    public editar(id: String, dataInicio: String, dataTermino: String, descricao: String, local: String) {
      const body = JSON.stringify({ id: id, dataInicio: dataInicio, dataTermino: dataTermino, descricao: descricao, local: local });
      console.log("enviando: " + body);
      return this.httpClient.put( getDefaultUrl('evento/' + id), body, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
    }

    public cadastrarAtividade(descricao: String, valor: Number, evento: String) {
      const body = JSON.stringify( { descricao : descricao, valor: valor, evento: evento } );
      console.log(body);
      const cabecalho: HttpHeaders = this.getHeaders();
      const url = getDefaultUrl('evento/atividade');
      return this.httpClient.post( url, body, {headers: cabecalho} ).pipe(catchError(this.handleError));
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
            alert('Registro já cadastrado na api 400');
            break;
          case 403:
            alert('Registro já cadastrado na api 403');
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

