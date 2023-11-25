import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {FormDialogRegisterComponent} from "./form-dialog-register/form-dialog-register.component";
import {FormDialogComponent} from "./form-dialog/form-dialog.component";
import {LoginComponent} from "./login/login.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDialogModule} from "@angular/material/dialog";
import {BibliaModule} from "../biblia/biblia.module";
import { FormDialogAdminComponent } from './form-dialog-admin/form-dialog-admin.component';




@NgModule({
  declarations: [
    MenuComponent,
    FormDialogComponent,
    FormDialogRegisterComponent,
    LoginComponent,
    FormDialogAdminComponent

  ],
  exports: [
    MenuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    RouterOutlet,
    MatDialogModule,
    BibliaModule
  ]
})
export class LayoutModule { }
