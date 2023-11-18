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
import { TokenAuthService } from './autenticacionYRegistro/token-auth.service';
import { TokenPostBackendService } from './autenticacionYRegistro/token-post-backend.service';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { HomeComponent } from './home/home.component';
import { AlbumListarService } from './listarService/album-listar.service';
import { GeneroListaService } from './listarService/genero-lista.service';
import { RecomendarListaService } from './listarService/recomendar-lista.service';
import { RegistrarUsuarioService } from './listarService/registrar-usuario.service';
import { TrackDeAlbumService } from './listarService/track-de-album.service';
import { UsuarioVotanteListService } from './listarService/usuario-votante-list.service';
import { VotoListaService } from './listarService/voto-lista.service';
import { LoginAdminFormComponent } from './login-admin/login-admin-form.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginFormComponent } from './login-cliente/login-cliente-form.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { TokenAuthComponentComponent } from './token-auth-component/token-auth-component.component';
import { ToolBarHeaderComponent } from './tool-bar-header/tool-bar-header.component';
import { TrackDeAlbumComponent } from './track-de-album/track-de-album.component';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
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
    TokenAuthComponentComponent,

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
    TrackDeAlbumService,
    TokenAuthService,
    TokenPostBackendService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
