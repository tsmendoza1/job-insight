import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NlqService {

  private apiUrl = 'http://localhost:8080/nlq/pregunta'; 

  constructor(private http: HttpClient) {}

  enviarPregunta(pregunta: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.post<any>(this.apiUrl, pregunta, { headers });
  }
}
