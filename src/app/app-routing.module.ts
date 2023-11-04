import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
const routes: Routes = ([

  {path: 'registroUsuario', component: RegistrarUsuarioComponent},
  {path: 'menu', component: MenuClienteComponent},
{path: 'loginAdmin', component: LoginAdminComponent},
  {path: '', component: LoginClienteComponent},
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
