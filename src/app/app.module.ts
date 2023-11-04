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
import { AlbumListarService } from './album-listar.service';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AppComponent } from './app.component';
import { GeneroListaService } from './genero-lista.service';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminFormComponent } from './login-admin/login-admin-form.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginFormComponent } from './login-cliente/login-cliente-form.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RecomendarListaService } from './recomendar-lista.service';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioService } from './registrar-usuario.service';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { TokenAuthComponentComponent } from './token-auth-component/token-auth-component.component';
import { ToolBarHeaderComponent } from './tool-bar-header/tool-bar-header.component';
import { TrackDeAlbumService } from './track-de-album.service';
import { TrackDeAlbumComponent } from './track-de-album/track-de-album.component';
import { UsuarioVotanteListService } from './usuario-votante-list.service';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaService } from './voto-lista.service';
import { VotoListaComponent } from './voto-lista/voto-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneroListaComponent,
    UsuarioVotanteListComponent,
    AlbumListarComponent,
    RecomendarListaComponent,
    VotoListaComponent,
    RegistrarUsuarioComponent,
    LoginFormComponent,
    MenuClienteComponent,
    LoginClienteComponent,
    LoginAdminComponent,
    LoginAdminFormComponent,
    HomeComponent,
    PostDetailComponent,
    ToolBarHeaderComponent,
    TrackDeAlbumComponent,
    TokenAuthComponentComponent
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
    GeneroListaService,
    UsuarioVotanteListService,
    AlbumListarService,
    RecomendarListaService,
    VotoListaService,
    RegistrarUsuarioService,
    TrackDeAlbumService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
