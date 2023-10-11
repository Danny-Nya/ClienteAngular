import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class AlbumListarService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any>{

    return this.http.get("//localhost:8080/Album/Lista");
  }
}
