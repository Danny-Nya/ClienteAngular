import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar-header',
  templateUrl: './tool-bar-header.component.html',
  styleUrls: ['./tool-bar-header.component.css']
})
export class ToolBarHeaderComponent {

  constructor(private router: Router) {}

navigateToGeneroLista() {
  this.router.navigate(['/cliente/genero-lista']);
}

navigateToRegistroDeUsuario() {
  this.router.navigate(['/registrar-usuario']);
}

navigateToBuscarAlbumes() {
  this.router.navigate(['/cliente/album-lista']);
}

}
