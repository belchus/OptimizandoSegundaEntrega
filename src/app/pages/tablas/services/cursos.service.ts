import { Injectable } from '@angular/core';
import { Curso } from '../../cursos/cursos.component';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos2$ = new Subject<Curso[]>();


  private cursos$ = new BehaviorSubject<Curso[]>([
    {
      id: 1,
      nombre: 'Python',
      profesor: 'Manuel Rodriguez',
      vacantes:9,
      fecha_inicio: new Date(),

  
  
      },
      {
        id: 2,
          nombre: 'Base de Datos',
          profesor: 'Manuel Rodriguez',
          vacantes:20,
          fecha_inicio: new Date(),
  
        
      },
      {
        id: 3,
          nombre: 'Angular',
          profesor: 'Lucas Pilar',
          vacantes:5,
          fecha_inicio: new Date(),
     
   
      
      },
      {
        id: 4,
          nombre: 'Desarrollo web',
          profesor: 'Melisa Morales',
          vacantes:25,
          fecha_inicio: new Date(),
      
      },
      
  ])

  constructor() { }

  obtenerAlumnos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Curso | undefined> {
    return this.cursos$.asObservable()
      .pipe(
        map((cursos) => cursos.find((a) => a.id === id))
      )
  }
}
