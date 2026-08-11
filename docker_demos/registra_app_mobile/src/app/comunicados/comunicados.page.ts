import { Component, OnInit } from '@angular/core';
import { ServicioAPIDjangoService } from '../services/servicio-apidjango.service';
import { Comunicado } from '../interface/comunicados';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.page.html',
  styleUrls: ['./comunicados.page.scss'],
})
export class ComunicadosPage implements OnInit {
  comunicados: Comunicado[] = []; // Almacena la lista de comunicados
  segmento: 'U' | 'G' = 'G'; // Inicializar con 'G' (General) por defecto

  constructor(private servicioAPIDjango: ServicioAPIDjangoService) {}

  ngOnInit() {
    this.listarComunicados(); // Llama a la función para listar comunicados al inicializar la página
  }

  // Función para obtener la lista de comunicados
  listarComunicados() {
    this.servicioAPIDjango.listarComunicados().subscribe((data) => {
      this.comunicados = data;
    });
  }

  cambiarSegmento() {
    // segmento es ahora actualizado automáticamente por ngModel
    this.listarComunicados(); // Recarga los comunicados
  }

  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleString(); // Esto mostrará la fecha en un formato legible
  }
  
  
}
