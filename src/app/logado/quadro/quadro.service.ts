import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { HttpErrorHandler, HandleError } from '../../../http-error-handler.service';
 
import { AuthUtilService } from 'src/app/auth/auth-util.service';
import { Quadro } from './quadro.model';
 
import { getDefaultUrl } from '../../app.const';
 
 
 
 
@Injectable()
export class QuadroService {
  constructor(private http: HttpClient, private authUtilService: AuthUtilService) { }
 
  getHttpOptions(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authUtilService.currentTokenValue
    });
  }
 
  // Faz a invocação de um recurso HTTP
  public getAll(): Observable<Quadro[]> {
    return this.http.get<Quadro[]>(getDefaultUrl('quadro'), { headers: this.getHttpOptions() }).pipe(catchError(this.handleError));
  }
 
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || "Server error");
  }
}