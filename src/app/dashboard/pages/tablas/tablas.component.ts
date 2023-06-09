
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlumnosService } from './services/alumnos.service';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { Usuario } from 'src/app/core/models/alumnos.model';


export interface Alumno {
  id: number;
  alumnoId:number;
  nombre: string;
  apellido: string;
  email: string;
  promedio:number;
  avatar:string;
  fecha_registro: Date;


}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {
 
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['id','avatar', 'nombreCompleto','email', 'promedio','fecha_registro','delete','ver_detalle','edit'];
   authUser$: Observable<Usuario | null>;

  alumnosSuscription: Subscription | null = null;
  constructor(
    private AlumnosService: AlumnosService,
    private store:Store,
    private matDialog: MatDialog,
    private router:Router,
    private activateRoute:ActivatedRoute,
 )
     {
      this.authUser$=this.store.select(selectAuthUser)
     }
  ngOnDestroy(): void {
    this.alumnosSuscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.alumnosSuscription = this.AlumnosService.obtenerAlumnos().subscribe({
      next: (alumnos) => {
        this.dataSource.data = alumnos;
      },
    });
  }
  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }
    
irAlDetalle(alumnoId:number):void{
  this.router.navigate([alumnoId],{relativeTo: this.activateRoute,queryParams:{
    page:1,
    limit:50,
  }})
}
  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
            alumnoId: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }
  delete(alumnoAEliminar: Alumno): void {

    if (confirm('Está seguro?')) {
      this.AlumnosService.eliminarAlumno(alumnoAEliminar.id);
  
   }}
   editarAlumno(alumnoParaEditar: Alumno): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: {
        alumnoParaEditar
      }
    });
    dialog.afterClosed().subscribe((valorDelFormulario) => {
      if (valorDelFormulario) {
        this.AlumnosService.editarAlumno(alumnoParaEditar.id, valorDelFormulario);
        
      }
    })
  }
}


