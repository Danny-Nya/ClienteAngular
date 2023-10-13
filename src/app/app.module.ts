import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumListarService } from './album-listar.service';
import { AlbumListarComponent } from './album-listar/album-listar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneroListaService } from './genero-lista.service';
import { GeneroListaComponent } from './genero-lista/genero-lista.component';
import { RecomendarListaService } from './recomendar-lista.service';
import { RecomendarListaComponent } from './recomendar-lista/recomendar-lista.component';
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
    VotoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GeneroListaService,UsuarioVotanteListService,AlbumListarService,RecomendarListaService,VotoListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
