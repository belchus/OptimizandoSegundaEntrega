
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ActivatedRoute, Router } from '@angular/router';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  promedio:number;
  fecha_registro: Date;


}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {
  estudiantes: Alumno[] = [
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
  ];
  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id', 'nombreCompleto','email', 'promedio','fecha_registro','delete','ver_detalle','edit'];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog,private router:Router,private activateRoute:ActivatedRoute) {}

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
          }
        ];
      }
    })
  }
  delete(alumnoAEliminar: Alumno): void {

    this.dataSource.data = this.dataSource.data.filter(
  
     (alumnoActual) => alumnoActual.id !== alumnoAEliminar.id,
  
    );
  
   }
   editarAlumno(alumnoParaEditar: Alumno): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: {
        alumnoParaEditar
      }
    });
    dialog.afterClosed().subscribe((valorDelFormulario) => {
      if (valorDelFormulario) {
        this.dataSource.data = this.dataSource.data.map(
          (alumnoActual) => alumnoActual.id === alumnoParaEditar.id
            ? ({ ...alumnoActual, ...valorDelFormulario})
            : alumnoActual,
        );
      }
    })
  }
}


