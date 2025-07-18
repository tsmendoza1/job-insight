import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OfertaLaboral, TipoTrabajo } from 'src/app/components/oferta-laboral';
import { OfertaLaboralService} from 'src/app/services/oferta-laboral.service';

@Component({
  selector: 'app-create-job-posting',
  templateUrl: './create-job-posting.page.html',
  styleUrls: ['./create-job-posting.page.scss'],
  imports:[IonicModule, FormsModule, CommonModule]
})
export class CreateJobPostingPage implements OnInit {

  nuevaOferta: OfertaLaboral = {
      nombreEmpresa: '',
      titulo: '',
      descripcion: '',
      requisitos: [],
      requisitosExperiencia: [],
      ubicacion: '',
      fechaPublicacion: '',
      salario: 0,
      tipoTrabajo: 'Presencial'
    };
  
    nuevoRequisito = '';
    nuevoRequisitoExp = '';
  
    tiposTrabajo: TipoTrabajo[] = ['Remoto', 'Presencial', 'Mixto'];
  
    constructor(private ofertaService: OfertaLaboralService) {}
  
    ngOnInit() {
    }
  
    agregarRequisito() {
      if (this.nuevoRequisito.trim()) {
        this.nuevaOferta.requisitos.push(this.nuevoRequisito.trim());
        this.nuevoRequisito = '';
      }
    }
  
    agregarRequisitoExperiencia() {
      if (this.nuevoRequisitoExp.trim()) {
        this.nuevaOferta.requisitosExperiencia.push(this.nuevoRequisitoExp.trim());
        this.nuevoRequisitoExp = '';
      }
    }
  
    eliminarRequisito(index: number) {
      this.nuevaOferta.requisitos.splice(index, 1);
    }
  
    eliminarRequisitoExp(index: number) {
      this.nuevaOferta.requisitosExperiencia.splice(index, 1);
    }
  
    guardarOferta() {
      this.agregarRequisito();
      this.agregarRequisitoExperiencia();
      this.ofertaService.crearOferta(this.nuevaOferta).subscribe({
        next: res => {
          console.log('Oferta creada:', res);
        },
        error: err => {
          console.error('Error al crear la oferta', err);
        }
      });
    }
}
