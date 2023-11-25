import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/modelo/usuario';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioCrudService} from "../../shared/services/usuario-crud.service";

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
}
