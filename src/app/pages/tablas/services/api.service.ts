import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  promedio:number;
}

export class ApiService {
 private authUser$ = new Subject <Alumno>();
  constructor(
    private entityName: string
  ) { }

ObtenerUsuario():Observable<Alumno>{
  return this.authUser$.asObservable();

}
  getById(id: number) {
    return {
      id,
      nombre: this.entityName === 'profesores' ? 'PROFESOR' : 'ALUMNO'
    }
  }


  getListado(): Observable<Alumno[]> {
    return new Observable<Alumno[]>((observer) => {
      setTimeout(() => {
        observer.next([
          {
            id: 1,
            nombre: 'Belen',
            apellido:'Arena',
            promedio:7
          },
          {
            id: 2,
            nombre: 'Matias',
            apellido:'Carmona',
            promedio:7
          },
            
          
        ])
        observer.complete();
      }, 3000);
    })
  }
}