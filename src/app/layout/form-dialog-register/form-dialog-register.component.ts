import { Component } from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../shared/services/auth.service";
import {UsuarioCrudService} from "../../shared/services/usuario-crud.service";
import {Usuario} from "../../shared/modelo/usuario";


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
}
