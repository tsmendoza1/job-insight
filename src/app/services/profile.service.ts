import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private baseUrl = 'http://localhost:8080/api/perfiles';

  constructor(private http: HttpClient) {}

  obtenerPerfilPorUsuarioId(usuarioId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${usuarioId}`);
  }
}

