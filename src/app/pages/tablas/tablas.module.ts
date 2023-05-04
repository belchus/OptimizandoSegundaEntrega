import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { AlumboDetalleComponent } from './alumbo-detalle/alumbo-detalle.component';
import { RouterModule } from '@angular/router';
import { AlumnosRoutingModule } from './alumnos-routing.module';



@NgModule({
  declarations: [
    TablasComponent,
    AbmAlumnosComponent,
    AlumboDetalleComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    PipesModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    DirectivesModule,
    AlumnosRoutingModule
  ],
  exports: [
    TablasComponent
  ]
})
export class TablasModule { }