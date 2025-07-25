import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const usuario = localStorage.getItem('usuario');
    const isPerfilRequest = req.url.includes('/api/perfiles');

    if (isPerfilRequest && usuario === null) {
      this.authService.logout();
      this.router.navigate(['/404']);
      return throwError(() => new Error('Sesión inválida: usuario no autenticado para /api/perfiles.'));
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const isPostulacion = req.url.includes('/postulaciones');
        const usuario = this.authService.getUsuario();

        const requiereRedireccion =
          (error.status === 401 || error.status === 404) &&
          !isPostulacion &&
          usuario === null;

        if (requiereRedireccion) {
          this.authService.logout();
          this.router.navigate(['/404']);

          return timer(2000).pipe(
            switchMap(() => {
              this.router.navigate(['/login']);
              return throwError(() => error);
            })
          );
        }

        return throwError(() => error);
      })
    );
  }
}
