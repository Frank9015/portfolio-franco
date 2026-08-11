import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { NavController, AlertController, AnimationController, Animation } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../interface/alumno';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('logoutButton', { static: true }) logoutButton!: ElementRef;
  username: string = '';

  constructor(
    public alertController: AlertController,
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private route: ActivatedRoute,
    

  ) {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }



  async cerrarSesion() {
    if (this.logoutButton) {
      const logoutAnimation = this.animationCtrl.create()
        .addElement(this.logoutButton.nativeElement)
        .duration(1000) // Duración de la animación en ms
        .keyframes([
          { offset: 0, opacity: '1', transform: 'scale(1)' },
          { offset: 1, opacity: '0', transform: 'scale(0)' }
        ]);
  
      await this.playAnimation(logoutAnimation); // Reproducir la animación
    }
  
    // Redirigir a la página de bienvenida después de que termine la animación
    setTimeout(() => {
      this.navCtrl.navigateRoot('/bienvenida');
    }, 1000); // Esperar 1 segundo antes de redirigir
  }
  
  
  async playAnimation(animation: Animation) {
    return new Promise<void>((resolve) => {
      animation.onFinish(() => {
        resolve();
      });
      animation.play();
    });
  }

  irANotasEscolares() {
    this.navCtrl.navigateForward('/test1');
  }

  irAMallaCurricular() {
    this.navCtrl.navigateForward('/malla-curricular');
  }

  irAnotaciones() {
    this.navCtrl.navigateForward('/anotaciones');
  }

  irAhorariodeclase(){
   this.navCtrl.navigateForward('/horario');
  }

  iracomunicados(){
    this.navCtrl.navigateForward('/comunicados');
  }

  abrirCamaraSimulada() {
    this.simularAperturaCamara();
  }

  private async simularAperturaCamara() {
    const cameraResult = 'Simulación: Se abrió la cámara. Resultado simulado: Código QR escaneado';
    
    const alert = await this.alertController.create({
      header: 'Simulación de Apertura de Cámara',
      message: cameraResult,
      buttons: ['OK']
    });

    await alert.present();
  }
  
}
