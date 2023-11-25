import { Component } from '@angular/core';
import {Usuario} from "../../shared/modelo/usuario";
import {Admin} from "../../shared/modelo/admin";
import {AdminCrudService} from "../../shared/services/admin-crud.service";
import {AuthAdminService} from "../../shared/services/auth-admin.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form-dialog-admin',
  templateUrl: './form-dialog-admin.component.html',
  styleUrls: ['./form-dialog-admin.component.css']
})
export class FormDialogAdminComponent {
  admins:Admin[] = []
  admin:Admin = new Admin(0,'','','')

  constructor( public dialogRef: MatDialogRef<FormDialogAdminComponent>,private _adminService:AdminCrudService, private authAmdin:AuthAdminService) {
  }
  ngOnInit(){
    this._adminService.listar()
        .subscribe(
            retorno => {
              this.admins = retorno.map(
                  item => {
                    return new Admin(
                        item.id,
                        item.email,
                        item.nome,
                        item.senha,
                    )
                  }
              )
            }
        )
  }

  entrar(): void {
    if(this.admin ){
      this.authAmdin.fazerLogin(this.admin.email, this.admin.senha)
      this.dialogRef.close();
    }
}
}
