import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postulacion, PostulacionCrearDTO } from '../components/postulacion';

@Injectable({
  providedIn: 'root'
})
export class PostulacionService {
  private apiUrl = 'http://localhost:8080/postulaciones';

  constructor(private http: HttpClient) {}

  obtenerMisPostulaciones(): Observable<Postulacion[]> {
    return this.http.get<Postulacion[]>(`${this.apiUrl}/mias`);
  }

  postularse(ofertaId: number, perfilId: number): Observable<Postulacion> {
    const nuevaPostulacion: PostulacionCrearDTO = {
      perfil: { id: perfilId },
      oferta: { id: ofertaId },
      estado: 'EN_PROCESO',
      fechaPostulacion: new Date().toISOString().split('T')[0]  // 'YYYY-MM-DD'
    };
    return this.http.post<Postulacion>(this.apiUrl, nuevaPostulacion);
  }
}