import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Notas } from 'src/app/interface/notas';
import { ServicioAPIDjangoService } from '../services/servicio-apidjango.service';
import { Profesor} from '../interface/profesor';
import { Materias } from '../interface/materias';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.page.html',
  styleUrls: ['./test1.page.scss'],
})
export class TEST1Page implements OnInit {
  lista_notas: Notas[] = [];
  profesores: Profesor[] = [];
  asignaturas: Materias[] = [];
  

  constructor(private modalCtrl: ModalController, private servAPI: ServicioAPIDjangoService) {}

  ngOnInit() {
    this.listar();
    this.listarMaterias();
    this.listarProfesores();
  }

  listar() {
    this.servAPI.listar().subscribe((data) => {
      console.log(data);
      this.lista_notas = data;
      
      // Verifica y ajusta los valores
      this.lista_notas.forEach(nota => {
        nota.parcial1 = parseFloat(nota.parcial1.toString());
        nota.parcial2 = parseFloat(nota.parcial2.toString());
        nota.parcial3 = parseFloat(nota.parcial3.toString());
        nota.parcial4 = parseFloat(nota.parcial4.toString());
        nota.examen_final = parseFloat(nota.examen_final.toString());
        
        console.log("parcial1:", nota.parcial1);
        console.log("parcial2:", nota.parcial2);
        console.log("parcial3:", nota.parcial3);
        console.log("parcial4:", nota.parcial4);
        console.log("examen_final:", nota.examen_final);
        
        if (
          isNaN(nota.parcial1) ||
          isNaN(nota.parcial2) ||
          isNaN(nota.parcial3) ||
          isNaN(nota.parcial4) ||
          isNaN(nota.examen_final)
        ) {
          console.error('Valores no válidos en la nota:', nota);
        } else {
          console.log("nota final:", this.calcularNotaFinal(nota));
        }
      });
    });
  }
  
  listarProfesores() {
    this.servAPI.listarProfesor().subscribe((profesores) => {
      // Filtra la lista de profesores para mostrar solo el profesor con ID 1
      this.profesores = profesores.filter((profesor) => profesor.id === 1);
    });
  }

  getNombreMateria(materiaId: number): string {
    const materia = this.asignaturas.find((asignatura) => asignatura.id === materiaId);
    return materia ? materia.nombre : 'Nombre no encontrado';
  }

  
  
  calcularNotaFinal(nota: Notas) {
    if (!nota || typeof nota.parcial1 !== 'number' || typeof nota.parcial2 !== 'number' || typeof nota.parcial3 !== 'number' || typeof nota.parcial4 !== 'number' || typeof nota.examen_final !== 'number') {
      console.error('Valores no válidos en la nota:', JSON.stringify(nota));
      return 'Valores no válidos'; // o algún valor predeterminado adecuado
    }
  
    const promedioParciales = (nota.parcial1 + nota.parcial2 + nota.parcial3 + nota.parcial4) / 4;
    const notaFinal = (promedioParciales * 0.4 + nota.examen_final * 0.6).toFixed(1);
    return notaFinal.toString(); // Convierte el resultado a cadena
  }
  
  listarMaterias() {
    this.servAPI.listarMaterias().subscribe((data) => {
      this.asignaturas = data;
    });
  }  
  
  
  getColor(nota: number) {
    if (nota >= 5.3) {
      return 'green';
    } else if (nota >= 4.0) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
