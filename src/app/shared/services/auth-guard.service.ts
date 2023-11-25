import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanActivate{

  constructor(
    private authService:AuthService, private router:Router
  ) { }
  canActivate( route:ActivatedRouteSnapshot,
               state: RouterStateSnapshot): Observable<boolean> | boolean
  {
    if(this.authService.usuarioEstaValidado()){
      return true;
    }
    this.router.navigate([''])
    return false;

  }
}
