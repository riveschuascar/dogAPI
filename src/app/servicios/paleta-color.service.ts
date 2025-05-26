import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaletaColorService {
  private url = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  obtenerPaletasColor() {
    return this.http.get(this.url);
  }
}
