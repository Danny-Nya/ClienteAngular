import { Component, OnInit } from '@angular/core';
import { AlbumListarService } from '../album-listar.service';

@Component({
  selector: 'app-album-listar',
  templateUrl: './album-listar.component.html',
  styleUrls: ['./album-listar.component.css']
})
export class AlbumListarComponent implements OnInit{

  albumes: Array<any> = []
  tracks: Array<any> = []
  constructor(private albumListaService: AlbumListarService){

  }
  ngOnInit(): void {
    this.albumListaService.getAll().subscribe(data => {

      this.albumes = data;
    })
  }

}
