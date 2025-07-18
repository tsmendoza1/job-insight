import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports:[IonicModule]
})
export class LoginPage implements OnInit {

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

  login(){
    this.router.navigate(['/home']);
  }

  routerSingIng(){
    this.router.navigate(['/singIn']);
  }
}
