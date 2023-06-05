import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
import { inscripcionesFeature } from './store/inscripciones.reducer';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InscripcionesDialogComponent } from './components/inscripciones-dialog/inscripciones-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTable, MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionesFeature),
    EffectsModule.forFeature([InscripcionesEffects]),
    MatListModule
  ]
})
export class InscripcionesModule { }
