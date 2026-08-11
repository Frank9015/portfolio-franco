import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cargandopage',
  templateUrl: './cargandopage.page.html',
  styleUrls: ['./cargandopage.page.scss'],
})
export class CargandopagePage implements OnInit {
  username: string = '';
  constructor(private route: ActivatedRoute,private navCtrl: NavController) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
    setTimeout(() => {
      this.navCtrl.navigateRoot(`/home/${this.username}`);
    }, 5000); // Espera 5 segundos antes de redirigir
  }
  }
