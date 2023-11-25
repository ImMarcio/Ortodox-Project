import { Injectable } from '@angular/core';
import {Usuario} from "../modelo/usuario";
import {Admin} from "../modelo/admin";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminLogadoService {
  url:string;
  private currentAdmin:Admin;
  constructor(private http:HttpClient) {
    this.currentAdmin = new Admin(0,'','','')
    this.url = 'http://localhost:3000/admins'
  }
  setCurrentAdmin(admin:Admin){
    this.currentAdmin = admin;
  }
  getCurrentAdmin(){
    return this.currentAdmin
  }
}
