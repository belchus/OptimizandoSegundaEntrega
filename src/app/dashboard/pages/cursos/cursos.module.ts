import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { CursosComponent } from './cursos.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursosRoutingModule } from './cursos-routing.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AbmCursosComponent,
    CursosComponent,
    CursoDetalleComponent

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
    MatTableModule,
    CursosRoutingModule,
    MatCardModule
  ],
  exports:[
    CursosComponent

  ]
})
export class CursosModule { }