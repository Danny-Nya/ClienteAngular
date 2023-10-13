import { Component, OnInit } from '@angular/core';
import { AlbumListarService } from '../album-listar.service';
import { Album } from '../modelo/album.interface';

@Component({
  selector: 'app-album-listar',
  templateUrl: './album-listar.component.html',
  styleUrls: ['./album-listar.component.css']
})
export class AlbumListarComponent implements OnInit{

  albumes: Album[] = [];
  constructor(private albumListaService: AlbumListarService){

  }
  ngOnInit(): void {
    this.albumListaService.getAll().subscribe((data: Album[]) => {

      this.albumes = data;
    })
  }

}
