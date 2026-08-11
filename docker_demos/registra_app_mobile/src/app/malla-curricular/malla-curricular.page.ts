import { Component } from '@angular/core';
import { ServicioAPIDjangoService } from '../services/servicio-apidjango.service';
import { Materias } from '../interface/materias';

@Component({
  selector: 'app-malla-curricular',
  templateUrl: './malla-curricular.page.html',
  styleUrls: ['./malla-curricular.page.scss'],
})
export class MallaCurricularPage {
  asignaturas: Materias[] = [];

  constructor(private servAPI: ServicioAPIDjangoService) { }

  ngOnInit() {
    this.listarMaterias();
  }

  getColor(asistencia: number): string {
    if (asistencia >= 85) {
      return 'green';
    } else if (asistencia >= 75) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  listarMaterias() {
    this.servAPI.listarMaterias().subscribe((data: Materias[]) => {
      this.asignaturas = data;
    });
  }
}
