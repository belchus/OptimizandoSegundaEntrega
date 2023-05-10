import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, mergeMap, take, tap } from 'rxjs';
import { Alumno } from '../tablas.component';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroments.prod';
import { CrearAlumnoPayload } from 'src/app/core/models/alumnos.model';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

 
  private estudiantes2$ = new BehaviorSubject<Alumno[]>(
    []);

  

  constructor(
    private httpClient: HttpClient
  ) {}

  get alumnos(): Observable<Alumno[]> {
    return this.estudiantes2$.asObservable();
  }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${enviroment.apiBaseUrl}/alumnos`)
    .pipe(
      tap((alumnos) => this.estudiantes2$.next(alumnos)),
      mergeMap(() => this.estudiantes2$.asObservable())
    );
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.estudiantes2$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }

  crearAlumno(payload: CrearAlumnoPayload): Observable<Alumno[]> {
    this.estudiantes2$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (alumnos) => {
          this.estudiantes2$.next([
            ...alumnos,
            {
              id: alumnos.length + 1,
              ...payload,
            },
          ]);
        },
        complete: () => {},
        error: () => {}
      });


    return this.estudiantes2$.asObservable();
  }
  editarAlumno(cursoId: number, actualizacion: Partial<Alumno>): Observable<Alumno[]> {
    this.estudiantes2$
      .pipe(
        take(1),
      )
    return this.estudiantes2$.asObservable();
  }
  eliminarAlumno(alumnoId: number): Observable<Alumno[]> {
    this.estudiantes2$
    .pipe(
      take(1)
    )
    .subscribe({
      next: (alumnos) => {
        const alumnoActualizado = alumnos.filter((curso) => curso.id !== alumnoId)
        this.estudiantes2$.next(alumnoActualizado);
      },
      complete: () => {},
      error: () => {}
    });

    return this.estudiantes2$.asObservable();
  }
}