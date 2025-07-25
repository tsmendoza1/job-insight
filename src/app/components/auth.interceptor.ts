import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwt');

    const isPublic =
      request.url.includes('/auth/login') ||
      request.url.includes('/auth/registro') ||
      request.url.includes('/api/usuarios') ||
      request.url.includes('/api/ofertas');

    const isPostulacion = request.url.includes('/postulaciones');

    if (token && !isPublic) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (( error.status === 401) && token && !isPostulacion) {
          this.authService.logout();
          this.router.navigateByUrl('/404', { replaceUrl: true });
        }

        return throwError(() => error);
      })
    );
  }
}
