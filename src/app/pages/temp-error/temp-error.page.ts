import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-temp-error',
  templateUrl: './temp-error.page.html',
  styleUrls: ['./temp-error.page.scss'],
  imports:[IonicModule]
})
export class TempErrorPage implements OnInit {

  constructor(
    private menuCtrl:MenuController,
    private router: Router
  ) { }

  contador: number = 20;
  intervalo: any;

  ngOnInit() {
    this.intervalo = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(this.intervalo);
        this.router.navigate(['/login']);
      }
    }, 1000);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
