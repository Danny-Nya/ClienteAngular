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
import { ToolBarHeaderComponent } from './tool-bar-header/tool-bar-header.component';
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
    ToolBarHeaderComponent

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
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule

  ],
  providers: [GeneroListaService,UsuarioVotanteListService,AlbumListarService,RecomendarListaService,VotoListaService,
    RegistrarUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
