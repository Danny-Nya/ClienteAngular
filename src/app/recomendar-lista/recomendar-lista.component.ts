import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../modelo/album.interface';
import { Genero } from '../modelo/genero.interface';
import { Recomendacion } from '../modelo/recomendacion.interface';
import { RecomendarListaService } from '../recomendar-lista.service';

@Component({
  selector: 'app-recomendar-lista',
  templateUrl: './recomendar-lista.component.html',
  styleUrls: ['./recomendar-lista.component.css']
})
export class RecomendarListaComponent implements OnInit{

  recomendaciones : Recomendacion[] = []
  genero: Observable<Genero>[] = []
  album: Observable<Album>[] = []


  constructor(private recomendarListaService: RecomendarListaService){}
  ngOnInit(): void {
    this.recomendarListaService.getAll().subscribe((data: Recomendacion[])=>{
      console.log( data )
      this.recomendaciones = data
    },
    (error) => {
      console.error('Error fetching data:', error);
    })
  }

}
