import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenService {
  private apiUrl = 'http://localhost:8081/public/autenticacion-usuario';

  constructor(private http: HttpClient) {}

  createToken(data: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_jwt_token_here',
    });

    return this.http.post(this.apiUrl, data, { headers });
  }
}
