import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertaLaboral } from '../components/oferta-laboral';

@Injectable({
  providedIn: 'root'
})
export class OfertaLaboralService {

  private baseUrl = 'http://localhost:8080/api/ofertas';

  constructor(private http: HttpClient) { }

  crearOferta(oferta: OfertaLaboral): Observable<OfertaLaboral> {
    return this.http.post<OfertaLaboral>(this.baseUrl, oferta);
  }

  obtenerOfertaPorId(id: number): Observable<OfertaLaboral> {
    return this.http.get<OfertaLaboral>(`${this.baseUrl}/${id}`);
  }

  obtenerTodasLasOfertas(): Observable<OfertaLaboral[]> {
    return this.http.get<OfertaLaboral[]>(this.baseUrl);
  }

  actualizarOferta(id: number, oferta: OfertaLaboral): Observable<OfertaLaboral> {
    return this.http.put<OfertaLaboral>(`${this.baseUrl}/${id}`, oferta);
  }

  eliminarOferta(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}