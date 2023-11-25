import { Component } from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../shared/services/auth.service";
import {UsuarioCrudService} from "../../shared/services/usuario-crud.service";
import {Usuario} from "../../shared/modelo/usuario";

// @ts-ignore
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-form-dialog-register',
  templateUrl: './form-dialog-register.component.html',
  styleUrls: ['./form-dialog-register.component.css']
})
export class FormDialogRegisterComponent {
  public usuario:Usuario =new Usuario(0, '','','','',0,'','','',0,0,'');
  alunos:Array<Usuario> = [];

  constructor( public dialogRef: MatDialogRef<FormDialogRegisterComponent>
    , private authService:AuthService,  private _usuarioService:UsuarioCrudService) {
  }

  ngOnInit(){
    this._usuarioService.listar()
      .subscribe(
        retorno => {
          this.alunos = retorno.map(
            item => {
              return new Usuario(
                item.id,
                item.email,
                item.nome,
                item.endereco,
                item.senha,
                item.idade,
                item.religiao,
                item.ideologiaPolitica,
                item.profissao,
                item.numeroFilhos,
                item.rendaFamiliar,
                item.grauFormacao,
              )
            }
          )
        }
      )


  }
  cadastrar(): void {
    this.usuario.id = this.alunos.length + 1;
    this.usuario.senha = this.encryptPassword(this.usuario.senha)
    this._usuarioService.inserir(this.usuario)
      .subscribe(
        (response) => {
          console.log('Recurso criado com sucesso',response);
        },
        (error) => {
          console.error('Error ao criar recurso', error);
        }
      )
    this.dialogRef.close();

  }
    //funciona corretamente
    encryptPassword(password: string ): string {
        return CryptoJS.AES.encrypt(password, "admin").toString();

    }

// Função para descriptografar a senha, tenho que passar a senha agora criptografada para ele descriptografar
    decryptPassword(encryptedPassword: string ): string {
        const bytes = CryptoJS.AES.decrypt(encryptedPassword, "admin");
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    mostrarCriptografia(){
      console.log("senha criptograda")
      console.log(this.encryptPassword("senha"));
      console.log("senha descriptografada")
      console.log("aqui"+ this.decryptPassword("U2FsdGVkX1/SEcJ000NESJ7b3KeHmCwXE0zLXqN9BhM="))
    }
}
