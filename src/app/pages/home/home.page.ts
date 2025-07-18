import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OfertaLaboral, TipoTrabajo } from 'src/app/components/oferta-laboral';
import { OfertaLaboralService } from 'src/app/services/oferta-laboral.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HomePage implements OnInit {

  constructor(private ofertaService: OfertaLaboralService) { }

  listaOfertas: OfertaLaboral[] = [];

  ngOnInit() {
    this.ofertaService.obtenerTodasLasOfertas().subscribe({
      next: (ofertas) => this.listaOfertas = ofertas,
      error: (err) => console.error('Error al obtener ofertas', err)
    });
  }

}
