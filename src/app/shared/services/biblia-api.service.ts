import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BibliaApiService {
  URL_BIBLIA = 'https://www.abibliadigital.com.br/api/books';
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL_BIBLIA);
  }

   getVerse(): Observable<any[]> {
  return this.httpClient.get<any[]>("https://www.abibliadigital.com.br/api/verses/nvi/random");
}

getBook(){
  return this.httpClient.get<any[]>("https://www.abibliadigital.com.br/api/books/pt");
}


}
