import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes =[
  {
    path :'',
    component:InscripcionesComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class InscripcionesRoutingModule { }
