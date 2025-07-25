import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { OfertaLaboral } from 'src/app/components/oferta-laboral';
import { AuthService } from 'src/app/services/auth.service';
import { OfertaLaboralService } from 'src/app/services/oferta-laboral.service';
import { PostulacionService } from 'src/app/services/postulacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(
    private authService: AuthService,
    private ofertaService: OfertaLaboralService,
    private postulacionService: PostulacionService,
    private toastController: ToastController
  ) { }

  listaOfertas: OfertaLaboral[] = [];

  ngOnInit() {
    this.ofertaService.obtenerTodasLasOfertas().subscribe({
      next: (ofertas) => this.listaOfertas = ofertas,
      error: (err) => console.error('Error al obtener ofertas', err)
    });
  }

  postularAOferta(ofertaId: any) {
    const usuario = this.authService.getUsuario();

    if (!usuario || !usuario.id) {
      console.log("No se encontró el id del usuario");
      this.toastController.create({
        message: 'Perfil no encontrado. Por favor, inicia sesión nuevamente.',
        duration: 3000,
        color: 'warning'
      }).then(toast => toast.present());
      return;
    }

    this.postulacionService.postularse(ofertaId, usuario.id).subscribe({
      next: () => {
        this.toastController.create({
          message: '¡Postulación enviada exitosamente!',
          duration: 2000,
          color: 'success'
        }).then(toast => toast.present());
      },
      error: err => {
        this.toastController.create({
          message: 'Error al postular: ' + (err.error?.message || 'Inténtalo más tarde'),
          duration: 3000,
          color: 'danger'
        }).then(toast => toast.present());
      }
    });
  }

}
