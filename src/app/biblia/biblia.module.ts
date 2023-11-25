import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarLivroComponent } from './listar-livro/listar-livro.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { VersoRandomComponent } from './verso-random/verso-random.component';



@NgModule({
  declarations: [
    ListarLivroComponent,
    VersoRandomComponent
  ],
  exports: [
    ListarLivroComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class BibliaModule { }
