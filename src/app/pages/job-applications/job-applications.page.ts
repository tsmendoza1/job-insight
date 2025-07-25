import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Postulacion } from 'src/app/components/postulacion';
import { PostulacionService } from 'src/app/services/postulacion.service';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.page.html',
  styleUrls: ['./job-applications.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule]
})
export class JobApplicationsPage implements OnInit {

  postulaciones: Postulacion[] = [];

  constructor(private postulacionService: PostulacionService) { }

  ngOnInit() {
    this.postulacionService.obtenerMisPostulaciones().subscribe({
      next: (data) => {
        this.postulaciones = data;
      },
      error: (err) => {
        console.error('Error al cargar postulaciones', err);
      }
    });
  }

}
