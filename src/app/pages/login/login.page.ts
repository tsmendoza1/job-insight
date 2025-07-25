import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private authService: AuthService
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  
  ngOnInit() {
  }
  email: string = '';
  password: string = '';

  login() {
    if (!this.email || !this.password) {
      alert('Debe ingresar usuario y clave.');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (resp) => {
        console.log('Token y datos del usuario:', resp);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert('Credenciales incorrectas');
      }
    });

  }
  routerSingIng() {
    this.router.navigate(['/singIn']);
  }
}
