import { Component, OnInit } from '@angular/core';
import { ServicioAPIDjangoService } from '../services/servicio-apidjango.service';
import { Materias } from '../interface/materias';
import { Profesor} from '../interface/profesor';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  asignaturas: Materias[] = [];
  profesores: Profesor[] = []; 

  constructor(private servAPI: ServicioAPIDjangoService) { }

  ngOnInit() {
    this.listarMaterias();
    this.listarProfesores();
  }

  listarProfesores() {
    this.servAPI.listarProfesor().subscribe((profesores) => {
      // Filtra la lista de profesores para mostrar solo el profesor con ID 1
      this.profesores = profesores.filter((profesor) => profesor.id === 1);
    });
  }


    listarMaterias() {
      this.servAPI.listarMaterias().subscribe((data) => {
        this.asignaturas = data;
      });
    }
  }
