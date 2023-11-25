import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Usuario} from "../modelo/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioLogadoService {
  url:string;
  private currentUser:Usuario;

  constructor(private http:HttpClient) {
    this.currentUser =new Usuario(0, '','','','',0,'','','',0,0,'');

    this.url = 'http://localhost:3000/usuarios'
  }

  setCurrentUser(usuario:Usuario){
    this.currentUser = usuario;
  }


  getCurrentUser():Usuario{
    return this.currentUser
  }



}
