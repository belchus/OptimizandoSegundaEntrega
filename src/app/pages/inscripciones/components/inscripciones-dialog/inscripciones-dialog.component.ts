import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Curso } from 'src/app/pages/cursos/cursos.component';
import { CursosService } from 'src/app/pages/cursos/services/cursos.service';
import { AlumnosService } from 'src/app/pages/tablas/services/alumnos.service';
import { Alumno } from 'src/app/pages/tablas/tablas.component';
import { InscripcionesActions } from '../../store/inscripciones.actions';
import { CreateInscrption } from '../../models';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrls: ['./inscripciones-dialog.component.scss']
})
export class InscripcionesDialogComponent {
  alumnos: Alumno[] = [];
  cursos: Curso[] = [];

  selectedCourseControl = new FormControl<Curso | null>(null);

  studentIdControl = new FormControl<number | null>(null, [
    Validators.required,
  ]);
  subjectIdControl = new FormControl<number | null>(null, [
    Validators.required,
  ]);
  courseIdControl = new FormControl<number | null>(null, [Validators.required]);

  incripcionForm = new FormGroup({
    cursoId: this.subjectIdControl,
    alumnoId: this.studentIdControl,
    id: this.courseIdControl,
  });

  destroyed$ = new Subject<void>();

  constructor(private alumnosService:AlumnosService, 
    private cursosService:CursosService, 
    private store:Store,  
    private dialogRef: DialogRef<InscripcionesDialogComponent>,){ 
    this.selectedCourseControl.valueChanges
    .pipe(takeUntil(this.destroyed$))
    .subscribe({
      next: (curso) => {
        if (curso) {
          this.subjectIdControl.setValue(curso.cursoId);
          this.courseIdControl.setValue(curso.id);
        }
      },
    });}
  
 

  ngOnInit(): void{
    this.alumnosService.obtenerAlumnos()
    .subscribe({
      next:(res)=>{
this.alumnos=res;
      }
    })

this.cursosService.obtenerCursos()
  .subscribe({
    next:(res)=>{
this.cursos=res;
    }
  })
}
ngOnDestroy(): void {
  this.destroyed$.next();
  this.destroyed$.complete();
}

onSave(): void {
  this.store.dispatch(
    InscripcionesActions.createInscription({
      data: this.incripcionForm.value as CreateInscrption,
    })
  );
this.dialogRef.close()
  }
 
}
