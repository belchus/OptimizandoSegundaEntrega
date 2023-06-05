import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject, takeUntil } from 'rxjs';
import { Alumno } from '../tablas.component';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-alumbo-detalle',
  templateUrl: './alumbo-detalle.component.html',
  styleUrls: ['./alumbo-detalle.component.scss']
})
export class AlumboDetalleComponent implements OnDestroy {

  alumno: Alumno | undefined;

  private destroyed$ = new Subject()

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
  ) {
    this.alumnosService.obtenerAlumnoPorId(parseInt(this.activatedRoute.snapshot.params['id']))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((alumno) => this.alumno = alumno);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  delete(alumnoAEliminar: Alumno): void {

    if (confirm('Está seguro?')) {
      this.alumnosService.eliminarAlumno(alumnoAEliminar.id);
  
   }}
}