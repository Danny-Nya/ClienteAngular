import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenService {
  private apiUrl = 'http://localhost:8081/public/autenticacion-usuario';

  constructor(private http: HttpClient) {}

  createToken(correo: string, contrasena: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'
    });

    const params = new HttpParams()
      .set('correo', correo)
      .set('contrasena', contrasena);


    const options = { headers, params };

    return this.http.post(this.apiUrl, null, options);
  }
}

