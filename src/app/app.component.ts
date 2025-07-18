import { Component } from '@angular/core';
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

  ];
  public labels = ['Para mi', 'Ofertas Disponibles', 'Ofertas Aplicadas'];
  constructor() {}
}
