import { Component } from '@angular/core';import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { CursosService } from './services/cursos.service';
import { Subscription } from 'rxjs';
export interface Curso {
  id: number;
  nombre: string;
  vacantes: number;
  profesor:string;
  fecha_inicio: Date;
  cursoId:number;


}
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  
      dataSource = new MatTableDataSource();
     displayedColumns: string[] = ['id', 'icono','nombre','profesor', 'vacantes','fecha_inicio','delete','ver_detalle','edit'];
    
  cursosSuscription: Subscription | null = null;

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
    private router:Router,private activateRoute:ActivatedRoute
  ) {
  }
  ngOnDestroy(): void {
    this.cursosSuscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.cursosSuscription = this.cursosService.obtenerCursos().subscribe({
      next: (cursos) => {
        this.dataSource.data = cursos;
      },
    });
  }

     aplicarFiltros(ev: Event): void {
      const inputValue = (ev.target as HTMLInputElement)?.value;
      this.dataSource.filter = inputValue?.trim()?.toLowerCase();
    }

    
    irAlDetalle(cursoId:number):void{
      this.router.navigate([cursoId],{relativeTo: this.activateRoute,queryParams:{
        page:1,
        limit:50,
      }})
    }
    abrirABMCursos(): void {
      const dialog = this.dialog.open(AbmCursosComponent)
      dialog.afterClosed().subscribe((valor) => {
        if (valor) {
          this.dataSource.data = [
            ...this.dataSource.data,
            {
              ...valor,
              fecha_inicio: new Date(),
              id: this.dataSource.data.length + 1,
              cursoId: this.dataSource.data.length + 1,
            }
          ];
        }
      })
    }
    delete(cursoAEliminar: Curso): void {
      if (confirm('Está seguro?')) {
        this.cursosService.eliminarCurso(cursoAEliminar.id);
    
     }
    }
     editarCurso(cursoParaEditar: Curso): void {
      const dialog = this.dialog.open(AbmCursosComponent, {
        data: {
          cursoParaEditar
        }
      });
      dialog.afterClosed().subscribe((valorDelFormulario) => {
        if (valorDelFormulario) {
          this.cursosService.editarCurso(cursoParaEditar.id, valorDelFormulario);
          
        }
      })
    }
    }
    
    
    

