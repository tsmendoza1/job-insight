import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NlqService } from 'src/app/services/nlq.service';

@Component({
  selector: 'app-natural-language-sp',
  templateUrl: './natural-language-sp.page.html',
  styleUrls: ['./natural-language-sp.page.scss'],
  imports:[IonicModule, FormsModule, CommonModule]
})
export class NaturalLanguageSPPage implements OnInit {

  pregunta: string = '';
  resultados: any[] = [];
  resultadoTexto: string = '';
  cargando: boolean = false;
  seConsulto: boolean = false;

  constructor(private nlqService: NlqService) {}

  consultar() {
    if (!this.pregunta.trim()) return;

    this.cargando = true;
    this.resultados = [];
    this.resultadoTexto = '';
    this.seConsulto = false;

    this.nlqService.enviarPregunta(this.pregunta).subscribe({
      next: (respuesta) => {
        this.cargando = false;
        this.seConsulto = true;

        if (Array.isArray(respuesta)) {
          if (respuesta.length === 1 && typeof respuesta[0] === 'object') {
            this.resultados = respuesta;
          } else if (respuesta.length === 1 && typeof respuesta[0] === 'string') {
            this.resultadoTexto = respuesta[0];
          } else {
            this.resultados = respuesta;
          }
        } else if (typeof respuesta === 'object') {
          this.resultados = [respuesta];
        } else if (typeof respuesta === 'string' || typeof respuesta === 'number') {
          this.resultadoTexto = respuesta.toString();
        }
      },
      error: (err) => {
        console.error('Error al consultar:', err);
        this.resultadoTexto = 'Hubo un error en la consulta.';
        this.cargando = false;
        this.seConsulto = true;
      }
    });
  }

  ngOnInit(){
      
  }

}
