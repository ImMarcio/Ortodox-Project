import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioCrudService} from "./usuario-crud.service";
import {UsuarioLogadoService} from "./usuario-logado.service";
import {AdminCrudService} from "./admin-crud.service";
import {AdminLogadoService} from "./admin-logado.service";
import {Usuario} from "../modelo/usuario";
import {Admin} from "../modelo/admin";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  adminValidado = false;
 constructor(private  router: Router,
             private _adminService:AdminCrudService,
             private adminLogado:AdminLogadoService) { }

  fazerLogin(email:string, senha:string){
    let adminAuteticado:Admin | null = null;
    this._adminService.listar().subscribe(usuariosListados => {
      usuariosListados.map((usuarioAtual) =>{
        if(usuarioAtual.email == email && usuarioAtual.senha == senha){
          adminAuteticado = usuarioAtual;
          this.adminLogado.setCurrentAdmin(adminAuteticado);
          this.adminValidado = true;
          this.router.navigate(['/listagemusuarios'])

        }

      })
      if(!adminAuteticado){
        this.adminValidado = false;
        window.alert("Email ou senha errada! Tente Novamente!");

      }
    })
  }

  usuarioEstaValidado(){
    return this.adminValidado;
  }

}
