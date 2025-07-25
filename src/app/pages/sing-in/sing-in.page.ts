import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, MenuController, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/components/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.page.html',
  styleUrls: ['./sing-in.page.scss'],
  imports:[IonicModule, FormsModule]
})
export class SingInPage implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    telefono: '',
    direccion: '',
    tipo: '',
  };

  constructor(
    private http: HttpClient, 
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  registrarUsuario() {
    const url = 'http://localhost:8080/api/usuarios';

    this.http.post(url, this.usuario).subscribe({
      next: (res) => {
        console.log('Usuario registrado con éxito', res);
        
        this.navCtrl.navigateRoot('/login'); 
      },
      error: (err) => {
        console.error('Error registrando usuario', err);
        alert('Error en el registro: ' + err.error?.message || 'Verifica los datos');
      },
    });
  }

  routerLogIn() {
    this.navCtrl.navigateRoot('/login');
  }

  ngOnInit() {
      
  }
  
}