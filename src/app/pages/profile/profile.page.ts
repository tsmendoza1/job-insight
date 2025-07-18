import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports:[IonicModule, FormsModule]
})
export class ProfilePage implements OnInit {

   perfil: any; // Debes reemplazar con el tipo adecuado

  constructor() {}

  ngOnInit() {
    // Aquí debes consumir el servicio que trae el perfil por el usuario logueado
    this.perfil = {
      usuario: { email: 'usuario@ejemplo.com' },
      descripcion: 'Desarrollador Fullstack apasionado por la tecnología.',
      habilidades: ['Java', 'Angular', 'Spring Boot', 'SQL'],
      experienciaLaboral: [
        { puesto: 'Backend Developer', empresa: 'TechCorp' },
        { puesto: 'Fullstack Developer', empresa: 'Innovatech' },
      ],
      formacionAcademica: [
        { titulo: 'Ingeniería en Sistemas', institucion: 'Universidad X' },
        { titulo: 'Maestría en Software', institucion: 'Universidad Y' },
      ],
    };
  }
}
