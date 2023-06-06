import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  constructor(private http: HttpClient) { }

  url = "https://pokeapi.co/api/v2/pokemon";

  obtenerPokemon(id: String): Observable<any> {
    var fullpath = `${this.url}/${id}`;
    return this.http.get(fullpath);
  }

}
