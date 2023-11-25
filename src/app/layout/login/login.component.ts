import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormDialogComponent} from "../form-dialog/form-dialog.component";


import {AuthService} from "../../shared/services/auth.service";


import {HttpClient} from "@angular/common/http";
import {FormDialogRegisterComponent} from "../form-dialog-register/form-dialog-register.component";
import {UsuarioLogadoService} from "../../shared/services/usuario-logado.service";
import {Usuario} from "../../shared/modelo/usuario";
import {FormDialogAdminComponent} from "../form-dialog-admin/form-dialog-admin.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private mostrarLogin:boolean = true;

  usuarioPrincipal:Usuario;

  constructor(public dialog: MatDialog, private authService: AuthService, private _HttpClient:HttpClient, private usuarioLogadoService:UsuarioLogadoService) {
  this.usuarioPrincipal = this.usuarioLogadoService.getCurrentUser()
  }
  ngOnOnit(){

  }
  openLive(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '500px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    this.mostrarLogin = false;
  }
  openAdmin():void{
    const dialogRef = this.dialog.open(FormDialogAdminComponent, {
      width: '500px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }
  openRegister(): void {
    const dialogRef = this.dialog.open(FormDialogRegisterComponent, {
      width: '500px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }


}
