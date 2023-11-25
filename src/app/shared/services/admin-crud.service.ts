import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../modelo/admin";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminCrudService {
  URL_ADMIN = 'http://localhost:3000/admins';
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.URL_ADMIN);
  }

  inserir(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.URL_ADMIN, admin);
  }

  atualizar(admin: Admin): Observable<Admin> {
    return this.httpClient.put<Admin>
    (`${this.URL_ADMIN}/${admin.id}`, admin);
  }

  apagar(id: number): Observable<Admin> {
    return this.httpClient.delete<Admin>(`${this.URL_ADMIN}/${id}`)
  }

  pesquisarPorId(id: number): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.URL_ADMIN}/${id}`)
  }
}
