import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Genero } from './modelo/genero.interface';

@Injectable()
export class GeneroListaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get('//localhost:8080/Genero/Lista');
  }

  private generoClickSource = new Subject<Genero>();

  generoClick$ = this.generoClickSource.asObservable();

  triggerGeneroClick(genero: Genero) {
    this.generoClickSource.next(genero);
  }


}
