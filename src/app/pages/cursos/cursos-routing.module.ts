import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
{
  path:'cursos',
  component:CursosComponent
},
{
  path:'cursos/:id',
  component:CursoDetalleComponent
}
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class CursosRoutingModule { }
