import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { InscripcionCompleta } from '../models';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  load:boolean;
  inscripcoionesList:InscripcionCompleta[];
  error:unknown;
  
}

export const initialState: State = {
  load:false,
  inscripcoionesList:[],
  error:null,
};

export const reducer = createReducer<State>(
  initialState,


  on(InscripcionesActions.loadInscripciones, state =>{
    return{
      ...state,
      load:true
    }
  }),
  on(InscripcionesActions.loadInscripcionesSuccess, (state, action) => {
    return{
      ...state,
      load:false,
      inscripcoionesList:action.data
    }
  }),
  on(InscripcionesActions.loadInscripcionesFailure, (state, action) => state),
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

