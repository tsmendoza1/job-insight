import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-natural-language-db',
  templateUrl: './natural-language-db.page.html',
  styleUrls: ['./natural-language-db.page.scss'],
  imports:[IonicModule, FormsModule, CommonModule]
})
export class NaturalLanguageDBPage implements OnInit {

  pregunta: string = '';
  resultados: any[] = [];
  cargando: boolean = false;
  seConsulto: boolean = false;

  consultar() {
   
  }

  ngOnInit() {
      
  }
}
