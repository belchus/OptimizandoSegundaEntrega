import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { InscripcionCompleta } from '../models';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: InscripcionCompleta[] }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),
  }
});
