import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.page.html',
  styleUrls: ['./sing-in.page.scss'],
  imports:[IonicModule]
})
export class SingInPage implements OnInit {

  nombre: string = "";
  apellido: string = "";
  email: string = "";
  contraseña: string = "";
  telefono: string = "";
  direccion: string = "";
  tipo: string = "";
  fechaCreacion: string = "";

  constructor(
    private menuCtrl: MenuController,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);  
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);   
  }

  ngOnInit() {
  }

  routerLogIn(){
    this.router.navigate(['/']);
  }
  
}
