import { Component } from '@angular/core';
import {Usuario} from "../../shared/modelo/usuario";
import {UsuarioCrudService} from "../../shared/services/usuario-crud.service";
import {CsvService} from "../../shared/services/csv.service";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioCrudService, private csvService:CsvService) {
  }

  downloadCSV(){
    this.csvService.downloadCSV(this.usuarios, "Usuarios-DATA")
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuariosRetornados =>
        this.usuarios = usuariosRetornados
    );
  }

  excluir(usuarioARemover: Usuario): void {
    if (usuarioARemover.id) {
      this.usuarioService.apagar(usuarioARemover.id).subscribe(
        usuarioRemovido => {
          const indx = this.usuarios.findIndex(usuario =>
            usuario.id === usuarioARemover.id);
          this.usuarios.splice(indx, 1);

        }
      );
    }
  }
}
