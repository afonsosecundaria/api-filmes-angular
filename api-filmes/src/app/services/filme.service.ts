import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root',
})

export class FilmeService {
  #http =  inject(HttpClient); 
  
  readonly API = 'http://www.omdbapi.com/?apikey=92927e86'

  obterFilme(titulo: string): Observable<Filme> {
    return this.#http.get<Filme>(`${this.API}&t=${titulo}`)
  }
}
