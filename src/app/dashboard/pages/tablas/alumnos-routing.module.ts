import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablasComponent } from './tablas.component';
import { AlumboDetalleComponent } from './alumbo-detalle/alumbo-detalle.component';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
{
  path:'estudiantes',
  component:TablasComponent
},
{
  path:'estudiantes/:id',
  canActivate:[AdminGuard],
  component:AlumboDetalleComponent
}
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class AlumnosRoutingModule { }
