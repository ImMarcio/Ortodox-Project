import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManterUsuarioComponent } from './manter-usuario/manter-usuario.component';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { DadosPropriosComponent } from './dados-proprios/dados-proprios.component';



@NgModule({
  declarations: [
    ManterUsuarioComponent,
    ListagemUsuarioComponent,
    DadosPropriosComponent
  ],
  exports: [
    ListagemUsuarioComponent,
    ManterUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule
  ]
})
export class UsuarioModule { }
