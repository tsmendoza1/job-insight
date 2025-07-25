import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, Observable } from 'rxjs';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

export interface LoginResponse {
  token: string;
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';
  private apiUrlme = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('jwt', response.token);

        this.http.get<any>(`${this.apiUrlme}/me`, {
          headers: {
            Authorization: `Bearer ${response.token}`
          }
        }).subscribe(user => {
          const usuario = {
            id: user.id,
            nombre: user.nombre,
            email: user.email,
          };
          localStorage.setItem('usuario', JSON.stringify(usuario));
          console.log('usuario cargado desde /me ->', usuario);
        });
      })
    );
  }

  getUsuario(): any | null {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('usuario');

    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const usuario = localStorage.getItem('usuario')?.trim();

    if (!token || !usuario) {
      console.log('no estas autenticado');
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000); 
      return payload.exp > now;
    } catch (e) {
      console.log('no estas autenticado');
      return false; 
    }
  }

}