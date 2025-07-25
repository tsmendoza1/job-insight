import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PerfilService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule]
})
export class ProfilePage implements OnInit {

  perfil: any = null;
  usuarioId: number | null = null;

  constructor(
    private perfilService: PerfilService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const usuario = this.authService.getUsuario();
    console.log('Usuario guardado:', usuario);

    // Validación previa similar al interceptor
    if (!usuario) {
      this.authService.logout();
      this.router.navigate(['/404']);
      return;
    }

    this.usuarioId = usuario.id;
    this.obtenerPerfil();
  }

  obtenerPerfil() {
    if (this.usuarioId !== null) {
      this.perfilService.obtenerPerfilPorUsuarioId(this.usuarioId).subscribe({
        next: perfil => {
          console.log('Perfil recibido:', perfil);
          this.perfil = perfil;
        },
        error: err => {
          console.error('Error al obtener perfil:', err);
        }
      });
    } else {
      console.error('ID de usuario no definido.');
    }
  }
}
