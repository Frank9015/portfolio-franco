import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../interface/alumno';
import { Notas } from '../interface/notas';
import { Comunicado } from '../interface/comunicados';
import { Profesor} from '../interface/profesor';
import { Materias} from '../interface/materias';
import { Anotaciones } from '../interface/anotaciones';

import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPIDjangoService {
  constructor (private http: HttpClient) {}

  url:string="https://lushoooc.pythonanywhere.com/api/notas/"
  private comunicadosUrl = 'https://lushoooc.pythonanywhere.com/api/comunicados/';
  private ProfesorUrl = 'https://lushoooc.pythonanywhere.com/api/profesor/';
  private MateriasUrl = 'https://lushoooc.pythonanywhere.com/api/materias/';
  private AnotacionesUrl = 'http://lushoooc.pythonanywhere.com/api/anotaciones/';



  listar(){
    return this.http.get<Notas[]>(this.url);
    }

  listarComunicados() {
    return this.http.get<Comunicado[]>(this.comunicadosUrl);
    }

  listarProfesor() {
    return this.http.get<Profesor[]>(this.ProfesorUrl);
    }  

  listarMaterias() {
    return this.http.get<Materias[]>(this.MateriasUrl);
    } 


  listarAnotaciones() {
    return this.http.get<Anotaciones[]>(this.AnotacionesUrl);
    } 
  

}
