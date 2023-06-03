import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateInscrption, InscripcionCompleta } from '../models';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: InscripcionCompleta[] }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),
    'Delete Inscription': props<{ id:number }>(),
    'Delete Inscription Success': props<{ data:number }>(),
    'Delete Inscription Failure': props<{ error:unknown }>(),
    'Create Inscription':props<{ data:CreateInscrption }>(),
    'Create Inscription Success':props<{ data:InscripcionCompleta }>(),
    'Create Inscription Failure':props<{ error:unknown }>(),
  }
  }
  

);
