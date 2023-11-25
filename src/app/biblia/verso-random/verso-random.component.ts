import { Component } from '@angular/core';
import {BibliaApiService} from "../../shared/services/biblia-api.service";

@Component({
  selector: 'app-verso-random',
  templateUrl: './verso-random.component.html',
  styleUrls: ['./verso-random.component.css']
})
export class VersoRandomComponent {
  versoRandom: any ;
  constructor(private bibliaService:BibliaApiService) {
  }

  ngOnInit(){

    this.bibliaService.getVerse().subscribe(
        versoRetornado => this.versoRandom = versoRetornado
    );
  }

}
