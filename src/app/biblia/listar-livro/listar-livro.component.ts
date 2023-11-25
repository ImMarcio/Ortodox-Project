import { Component } from '@angular/core';
import {BibliaApiService} from "../../shared/services/biblia-api.service";

import {Observable} from "rxjs";

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent {

  livros:any[] = [];
  versoRandom: any ;
    constructor(private bibliaService:BibliaApiService) {
  }

  ngOnInit(){
    this.bibliaService.listar().subscribe(
      livrosRetornados =>
        this.livros = livrosRetornados
    );
    this.bibliaService.getVerse().subscribe(
      versoRetornado => this.versoRandom = versoRetornado
    );
  }

  gerarVersiculo(){
    this.bibliaService.getVerse().subscribe(
        versoRetornado => this.versoRandom = versoRetornado
    );
  }
}
