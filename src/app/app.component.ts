import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Perfil', url: '/profile', icon: 'person' },
    { title: 'Mis postulaciones', url: '/jobApplications', icon: 'wallet'},
    { title: 'Crear Oferta', url: '/jobPosting', icon: 'create' },
    { title: 'Interaccion personal', url: '/nlSP', icon: 'create' },
    { title: 'Cerrar Sesion', icon: 'log-out', action:'logOut'},
  ];

  public labels = ['Para mi', 'Ofertas Disponibles', 'Ofertas Aplicadas'];
  constructor(private authService: AuthService, private router: Router) {}

  logOut(){
    this.authService.logout();
  }
}