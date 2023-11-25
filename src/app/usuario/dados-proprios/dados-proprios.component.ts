import { Component } from '@angular/core';
import {UsuarioLogadoService} from "../../shared/services/usuario-logado.service";
import {Usuario} from "../../shared/modelo/usuario";
import {UsuarioCrudService} from "../../shared/services/usuario-crud.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dados-proprios',
  templateUrl: './dados-proprios.component.html',
  styleUrls: ['./dados-proprios.component.css']
})
export class DadosPropriosComponent {

  usuarioDeManutencao: Usuario;
  private estahCadastrando: boolean = true;
constructor(private _usuarioLogado:UsuarioLogadoService, private usuarioService:UsuarioCrudService, private roteador: Router ) {

    this.usuarioDeManutencao = _usuarioLogado.getCurrentUser();
    const idParaEdicao = this.usuarioDeManutencao.id
    if (idParaEdicao) {
        // editando
        this.usuarioService.pesquisarPorId(Number(idParaEdicao)).subscribe(
            usuarioRetornado => {
                this.usuarioDeManutencao = usuarioRetornado;
                console.log(usuarioRetornado)
                this.estahCadastrando = false;

            }
        );
    } else {

    }
}

salvar(){
    this.usuarioService.atualizar(this.usuarioDeManutencao).subscribe(
        usuarioAtualizado => console.log('Usuário atualizado com sucesso!')
    );
    this.roteador.navigate(['listagemusuarios']);
}

}
