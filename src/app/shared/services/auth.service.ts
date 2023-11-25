import { Injectable } from '@angular/core';

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {Observable, Subscription} from "rxjs";
import {UsuarioLogadoService} from "./usuario-logado.service";

import {UsuarioCrudService} from "./usuario-crud.service";
import {Usuario} from "../modelo/usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioValidado = false;
  professorValidado = false;
  constructor(private  router: Router,  private _usuarioService:UsuarioCrudService, private alunoLogadoService:UsuarioLogadoService) { }

//TODO alterar o código para fazer login como usuário

  fazerLogin(email:string, senha:string){
   let usuarioAuteticado:Usuario | null = null;
   this._usuarioService.listar().subscribe(usuariosListados => {
     usuariosListados.map((usuarioAtual) =>{
       if(usuarioAtual.email == email && usuarioAtual.senha == senha){
         usuarioAuteticado = usuarioAtual;
         this.alunoLogadoService.setCurrentUser(usuarioAuteticado);
         this.usuarioValidado = true;
          this.router.navigate(['/biblia'])

       }

     })
     if(!usuarioAuteticado){
       this.usuarioValidado = false;
       window.alert("Email ou senha errada! Tente Novamente!");

     }
   })
  }

 usuarioEstaValidado(){
    return this.usuarioValidado;
  }



}



