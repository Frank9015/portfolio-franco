import { Component, OnInit } from '@angular/core';
import { Anotaciones } from '../interface/anotaciones';
import { ServicioAPIDjangoService } from '../services/servicio-apidjango.service';

@Component({
  selector: 'app-anotaciones',
  templateUrl: './anotaciones.page.html',
  styleUrls: ['./anotaciones.page.scss'],
})
export class AnotacionesPage implements OnInit {
  anotaciones: Anotaciones[] = [];

  constructor(private servAPI: ServicioAPIDjangoService) {}

  ngOnInit() {
    this.listarAnotaciones();
  }

  listarAnotaciones() {
    this.servAPI.listarAnotaciones().subscribe((data) => {
      this.anotaciones = data;
    });
  }
}
