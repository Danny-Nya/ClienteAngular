import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/modelo/genero.interface';
import { GeneroService } from 'src/app/service/genero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-Genero',
  templateUrl: './editar-Genero.component.html',
  styleUrls: ['./editar-Genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  genero: Genero;

  constructor(
    private generoService: GeneroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.generoService.detail(id).subscribe(
      data => {
        this.genero = data;
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.generoService.update(id, this.genero).subscribe(
      data => {
        this.router.navigate(['/menu-admin-genero']);
      }
    );
  }

}