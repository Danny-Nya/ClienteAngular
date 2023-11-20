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
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AppComponent } from './app.component';
import { ObtenerRolesService } from './autenticacionYRegistro/obtener-roles.service';
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
import { UserPageComponent } from './user-page/user-page.component';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaComponent } from './voto-lista/voto-lista.component';
import { AlbumService } from './objetoServices/album.service';
import { GeneroService } from './objetoServices/genero.service';
import { UsuarioVotanteService } from './objetoServices/usuario-votante.service';
import { TrackService } from './objetoServices/track.service';
import { VotoService } from './objetoServices/voto.service';
import { RecomendacionService } from './objetoServices/recomendacion.service';
import { AdminService } from './objetoServices/admin.service';
import { CancionListarComponent } from './menu-admin/cancion-listar/cancion-listar.component';
import { AlbumListarAdminComponent } from './menu-admin/album-listar-admin/album-listar-admin.component';
import { EditarAlbumComponent } from './menu-admin/editar-album/editar-album.component';
import { EditarCancionComponent } from './menu-admin/editar-cancion/editar-cancion.component';
import { EditarGeneroComponent } from './menu-admin/editar-genero/editar-genero.component';
import { FormAlbumComponent } from './menu-admin/form-album/form-album.component';
import { FormCancionComponent } from './menu-admin/form-cancion/form-cancion.component';
import { FormGeneroComponent } from './menu-admin/form-genero/form-genero.component';
import { GeneroListarAdminComponent } from './menu-admin/genero-listar-admin/genero-listar-admin.component';
import { MenuAdminAlbumComponent } from './menu-admin/menu-admin-album/menu-admin-album.component';
import { MenuAdminGeneroComponent } from './menu-admin/menu-admin-genero/menu-admin-genero.component';
import { MenuAdminComponent } from './menu-admin/menu-admin/menu-admin.component';

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
    UserPageComponent,
    CancionListarComponent,
    AlbumListarAdminComponent,
    EditarAlbumComponent,
    EditarCancionComponent,
    EditarGeneroComponent,
    FormAlbumComponent,
    FormCancionComponent,
    FormGeneroComponent,
    GeneroListarAdminComponent,
    MenuAdminAlbumComponent,
    MenuAdminGeneroComponent,
    MenuAdminComponent

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
    MatIconModule,
    JwtModule

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
    TokenPostBackendService,
    ObtenerRolesService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AdminService,
    AlbumService,
    GeneroService,
    TrackService,
    UsuarioVotanteService,
    RecomendacionService,
    VotoService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
