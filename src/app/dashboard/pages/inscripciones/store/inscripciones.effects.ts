import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscripcionesActions } from './inscripciones.actions';
import { InscripService } from '../services/inscrip-service.service';


@Injectable()
export class InscripcionesEffects {

  loadInscripciones$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.loadInscripciones),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscripService.getAllInscrip().pipe(
          map(data => InscripcionesActions.loadInscripcionesSuccess({ data })),
          catchError(error => of(InscripcionesActions.loadInscripcionesFailure({ error }))))
      )
    );
  });
  createInscription$= createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.createInscription),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscripService.createInscripcion(action.data).pipe(
          map(res => InscripcionesActions.createInscriptionSuccess({ data:res })),
          catchError(error => of(InscripcionesActions.createInscriptionFailure({ error }))))
      )
    );
  });
  deleteInscription$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscripcionesActions.deleteInscription),
      concatMap((action) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscripService.deleteInscriptionById(action.id).pipe(
          map(data => InscripcionesActions.deleteInscriptionSuccess({ data:action.id })),
          catchError(error => of(InscripcionesActions.deleteInscriptionFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions,private inscripService:InscripService) {}
}
