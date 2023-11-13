import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../modelo/album.interface';
import { TrackDeAlbumService } from '../track-de-album.service';

@Component({
  selector: 'app-track-de-album',
  templateUrl: './track-de-album.component.html',
  styleUrls: ['./track-de-album.component.css']
})
export class TrackDeAlbumComponent implements OnInit {

  album_id: string | null = null;
  albums: Album | null = null;

  constructor(private route: ActivatedRoute, private albumService: TrackDeAlbumService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.album_id = params.get('id');
      if (this.album_id !== null) {
      this.albumService.getAlbumById(this.album_id).subscribe(
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




