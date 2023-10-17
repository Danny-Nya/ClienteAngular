import { Component, OnInit } from '@angular/core';
import { GeneroListaService } from '../genero-lista.service';

@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  generos :Array<any> = [];

  showListaDeGeneros: boolean = true

  constructor(private generoListaService: GeneroListaService){}
  ngOnInit(): void {
    this.generoListaService.getAll().subscribe(data => {

      this.generos = data;
    })
  }

}
