import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/modelo/usuario';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioCrudService} from "../../shared/services/usuario-crud.service";

// @ts-ignore
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-manter-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrls: ['./manter-usuario.component.css']
})
export class ManterUsuarioComponent {
  usuarioDeManutencao: Usuario;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  constructor(private rotaAtual: ActivatedRoute, private roteador: Router,
              private usuarioService: UsuarioCrudService) {
    this.usuarioDeManutencao = new Usuario(0, '','','','',0,'','','',0,0,'');
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      this.usuarioService.pesquisarPorId(Number(idParaEdicao)).subscribe(
        usuarioRetornado => {
          this.usuarioDeManutencao = usuarioRetornado;
          console.log(usuarioRetornado)
          this.estahCadastrando = false;
          this.nomeBotaoManutencao = 'Salvar';
        }
      );
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.usuarioDeManutencao) {
      this.usuarioDeManutencao.senha = this.encryptPassword(this.usuarioDeManutencao.senha)
      this.usuarioService.inserir(this.usuarioDeManutencao).subscribe(
         usuarioInserido => console.log('Usuário cadastrado com sucesso!')
      );
    } else {
      this.usuarioService.atualizar(this.usuarioDeManutencao).subscribe(
         usuarioAtualizado => console.log('Usuário atualizado com sucesso!')
      );
    }
    this.usuarioDeManutencao = new Usuario(0, '','','','',0,'','','',0,0,'');

    this.nomeBotaoManutencao = 'Cadastrar';

    this.roteador.navigate(['listagemusuarios']);
  }
  encryptPassword(password: string ): string {
    return CryptoJS.AES.encrypt(password, "admin").toString();

  }

// Função para descriptografar a senha, tenho que passar a senha agora criptografada para ele descriptografar
  decryptPassword(encryptedPassword: string ): string {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, "admin");
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
