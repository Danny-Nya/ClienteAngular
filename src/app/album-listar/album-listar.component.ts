import { Component, OnInit } from '@angular/core';
import { Album } from '../modelo/album.interface';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-album-listar',
  templateUrl: './album-listar.component.html',
  styleUrls: ['./album-listar.component.css']
})
export class AlbumListarComponent implements OnInit{

  showInfoAlbumConTracks: boolean = true

  albumes: Album[] = [];
  constructor(private albumService: AlbumService){
    
  }
  ngOnInit(): void {
    this.cargar();
  }
//Vuelve el colorscheme transparente
  generateGradient(color: string): string {
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.3)`;
  }
  cargar(): void {
    this.albumService.lista().subscribe(
      data => {
        this.albumes = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  borrar(id: number) {
    this.albumService.delete(id).subscribe(
      data => {
        });
        this.albumService.lista();
      };
  }
