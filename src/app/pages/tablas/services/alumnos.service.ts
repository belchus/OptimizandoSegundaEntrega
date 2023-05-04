import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Alumno } from '../tablas.component';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

 
  private estudiantes2$ = new Subject<Alumno[]>();

  // BehaviorSubject
  private estudiantes$ = new BehaviorSubject<Alumno[]>([
    {
        id: 1,
        nombre: 'Camila',
        apellido: 'Arena',
        email:'arenabelu@gmail.com',
        promedio:9,
        fecha_registro: new Date(),
  
  
      },
      {
        id: 2,
        nombre: 'Lucia',
        apellido: 'Velazques',
        email: 'luciave@gmail.com',
        promedio:5,
        fecha_registro: new Date(),
  
        
      },
      {
        id: 3,
        nombre: 'Matias',
        apellido: 'Carmona',
        email:'maticarmona@gmail.com',
        promedio:6,
        fecha_registro: new Date(),
   
      
      },
      {
        id: 4,
        nombre: 'Nicolas',
        apellido: 'Perez',
        email:'perezn@gmail.com',
        promedio:7,
        fecha_registro: new Date(),
   
      
      },
      {
        id: 5,
        nombre: 'Abigail',
        apellido: 'Gomez',
        email:'abigomez@gmail.com',
        promedio:4,
        fecha_registro: new Date(),
   
      
      },
  ])

  constructor() { }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.estudiantes$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}