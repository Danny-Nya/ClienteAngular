import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumListarService } from './album-listar.service';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneroListaService } from './genero-lista.service';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { RecomendarListaService } from './recomendar-lista.service';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
import { RegistrarUsuarioService } from './registrar-usuario.service';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { UsuarioVotanteListService } from './usuario-votante-list.service';
import { UsuarioVotanteListComponent } from './usuario-votante-list/usuario-votante-list.component';
import { VotoListaService } from './voto-lista.service';
import { VotoListaComponent } from './voto-lista/voto-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-cliente/login-cliente-form.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginAdminFormComponent } from './login-admin/login-admin-form.component';

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
    LoginAdminFormComponent
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
    BrowserAnimationsModule
  ],
  providers: [GeneroListaService,UsuarioVotanteListService,AlbumListarService,RecomendarListaService,VotoListaService,
    RegistrarUsuarioService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
