import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../modelo/album.interface';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-track-de-album',
  templateUrl: './track-de-album.component.html',
  styleUrls: ['./track-de-album.component.css']
})
export class TrackDeAlbumComponent implements OnInit {

  album_id: number | null = null;
  albums: Album | null = null;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.album_id = Number(params.get('id'));
      if (this.album_id !== null) {
      this.albumService.detail(this.album_id).subscribe(
        (data) => {
          this.albums = data;

        },
        (error) => {
          console.error('Error fetching album details:', error);
        }
      );
      }
    });
  }
  }




