import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegistrarUsuarioService {

  constructor(private http: HttpClient) {}

  addUser(user: any){
    return this.http.post('/UsuarioVotante/Agregar', user);
  }
}
