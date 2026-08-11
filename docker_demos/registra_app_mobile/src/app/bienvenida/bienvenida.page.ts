import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  async iniciarSesion() {
    if (this.username && this.password) {
      const loading = await this.loadingCtrl.create({
        message: 'Iniciando sesión...',
      });
      await loading.present();

      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.navigateRoot(`/cargandopage/${this.username}`);
      }, 2000); // Simula un tiempo de carga antes de ir al home
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Alerta',
        message: 'Por favor, ingresa el usuario y la contraseña.',
        buttons: ['OK'],
      });
      await alert.present();
    }

  }
}

