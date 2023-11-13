import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AppComponent } from './app.component';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { RecomendacionService } from './service/recomendacion.service';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { TokenAuthComponentComponent } from './token-auth-component/token-auth-component.component';
import { ToolBarHeaderComponent } from './tool-bar-header/tool-bar-header.component';
import { TrackDeAlbumComponent } from './track-de-album/track-de-album.component';
import { UsuarioVotanteListService } from './usuario-votante-list.service';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaService } from './voto-lista.service';
import { VotoListaComponent } from './voto-lista/voto-lista.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AlbumService } from './service/album.service';
import { GeneroService } from './service/genero.service';
import { MenuAdminAlbumComponent } from './menu-admin-album/menu-admin-album.component';
import { MenuAdminGeneroComponent } from './menu-admin-genero/menu-admin-genero.component';
import { MenuAdminCancionComponent } from './menu-admin-cancion/menu-admin-cancion.component';
import { FormAlbumComponent } from './form-album/form-album.component';
import { EditarAlbumComponent } from './editar-album/editar-album.component';
import { EditarCancionComponent } from './editar-cancion/editar-cancion.component';
import { EditarGeneroComponent } from './editar-genero/editar-genero.component';
import { FormGeneroComponent } from './form-genero/form-genero.component';
import { TrackService } from './service/track.service';
import { CancionListarComponent } from './cancion-listar/cancion-listar.component';
import { FormCancionComponent } from './form-cancion/form-cancion.component';
import { GeneroListarComponent } from './genero-listar/genero-listar.component';
import { MenuClienteGeneroComponent } from './menu-cliente-genero/menu-cliente-genero.component';
import { MenuClienteAlbumComponent } from './menu-cliente-album/menu-cliente-album.component';
import { MenuClienteCancionComponent } from './menu-cliente-cancion/menu-cliente-cancion.component';
import { MenuClienteCancionDetalleComponent } from './menu-cliente-cancion-detalle/menu-cliente-cancion-detalle.component';
import { ClienteSomeAlbumComponent } from './cliente-some-album/cliente-some-album.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneroListaComponent,
    UsuarioVotanteListComponent,
    RecomendarListaComponent,
    AlbumListarComponent,
    CancionListarComponent,
    VotoListaComponent,
    RegistrarUsuarioComponent,
    MenuClienteComponent,
    LoginClienteComponent,
    LoginAdminComponent,
    HomeComponent,
    ToolBarHeaderComponent,
    TrackDeAlbumComponent,
    TokenAuthComponentComponent,
    MenuAdminComponent,
    MenuAdminAlbumComponent,
    MenuAdminGeneroComponent,
    MenuAdminCancionComponent,
    FormAlbumComponent,
    EditarAlbumComponent,
    EditarCancionComponent,
    EditarGeneroComponent,
    FormGeneroComponent,
    FormCancionComponent,
    GeneroListarComponent,
    MenuClienteGeneroComponent,
    MenuClienteAlbumComponent,
    MenuClienteCancionComponent,
    MenuClienteCancionDetalleComponent,
    ClienteSomeAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule

  ],
  providers: [
    UsuarioVotanteListService,
    RecomendacionService,
    VotoListaService,
    AlbumService,
    GeneroService,
    TrackService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
