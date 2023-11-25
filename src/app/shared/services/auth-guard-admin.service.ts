import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

import {AuthAdminService} from "./auth-admin.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService  implements  CanActivate {

  constructor(private authAdmin:AuthAdminService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {
     if(this.authAdmin.usuarioEstaValidado()){
      return true;
    }
    this.router.navigate([''])
    return false;
  }
}
