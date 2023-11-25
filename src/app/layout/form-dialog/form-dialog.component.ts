import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";


import {AuthService} from "../../shared/services/auth.service";

import {Usuario} from "../../shared/modelo/usuario";
import {UsuarioCrudService} from "../../shared/services/usuario-crud.service";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent {
  public user: Usuario  = new Usuario(0, '','','','',0,'','','',0,0,'');
  alunos:Array<Usuario> = [];

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>
  , private authService:AuthService,  private _usuarioService:UsuarioCrudService) {}

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
  entrar(): void {
    if(this.user ){
    this.authService.fazerLogin(this.user.email, this.user.senha)
    this.dialogRef.close();
    }


  }
}
