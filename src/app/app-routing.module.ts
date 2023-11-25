import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManterUsuarioComponent} from "./usuario/manter-usuario/manter-usuario.component";
import {ListagemUsuarioComponent} from "./usuario/listagem-usuario/listagem-usuario.component";
import {LoginComponent} from "./layout/login/login.component";
import {ListarLivroComponent} from "./biblia/listar-livro/listar-livro.component";
import {DadosPropriosComponent} from "./usuario/dados-proprios/dados-proprios.component";
import {AuthGuardService} from "./shared/services/auth-guard.service";
import {AuthAdminService} from "./shared/services/auth-admin.service";
import {AuthGuardAdminService} from "./shared/services/auth-guard-admin.service";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,

  },
  {
    path: 'cadastrousuario',
    component: ManterUsuarioComponent,
    canActivate:[AuthGuardAdminService]
  },
  {
    path: 'editausuario/:id',
    component: ManterUsuarioComponent,
    canActivate: [AuthGuardAdminService]
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuarioComponent,
    canActivate: [AuthGuardAdminService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'biblia',
    component: ListarLivroComponent
  },
  {
    path: 'dadosproprios',
    component: DadosPropriosComponent,
     canActivate: [AuthGuardService]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
