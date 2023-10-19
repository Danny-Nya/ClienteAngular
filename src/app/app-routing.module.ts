import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { TrackDeAlbumComponent } from './track-de-album/track-de-album.component';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaComponent } from './voto-lista/voto-lista.component';

const routes: Routes = [
  { path: 'album-lista', component: AlbumListarComponent },
  {path: 'album-lista/:id', component: TrackDeAlbumComponent},
  { path: 'genero-lista', component: GeneroListaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recomendar-lista', component: RecomendarListaComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'usuario-votante-list', component: UsuarioVotanteListComponent },
  { path: 'voto-lista', component: VotoListaComponent },
  {path: 'registroUsuario', component: RegistrarUsuarioComponent},

  // Ruta predeterminada, redirecciona a 'home' por defecto
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Si se ingresa una ruta no existente, redirecciona a 'home'
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
