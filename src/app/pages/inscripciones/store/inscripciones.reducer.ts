import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { InscripcionCompleta } from '../models';

export const inscripcionesFeatureKey = 'inscripciones';

export interface State {
  load:boolean;
  inscripcionesList:InscripcionCompleta[];
  error:unknown;
  
}

export const initialState: State = {
  load:false,
  inscripcionesList:[],
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
      inscripcionesList:action.data
    }
  }),
  on(InscripcionesActions.deleteInscription, state =>{
    return{
      ...state,
      load:true
    }
  }),
  on(InscripcionesActions.loadInscripcionesFailure, (state, action) => {return{
    ...state,
    load:false,
    error:action.error
  }
  }),

  on(InscripcionesActions.deleteInscriptionSuccess,(state,action)=>{
    return{
      ...state,
      inscripcionesList:state.inscripcionesList.filter((i)=>i.id  == action.data),
      load:false
    }
   
   
  }),
  on(InscripcionesActions.deleteInscriptionFailure,(state,action)=>{
    return{
      ...state,
      load:false,
      error:action.error
    }
   
  }),
  
  on(InscripcionesActions.createInscription, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),
  
  on(InscripcionesActions.createInscriptionSuccess,(state,action)=>{
    const newInscription = action.data;
    return{
      ...state,
      load:true,
     inscripcionesList:[...state.inscripcionesList,newInscription]
      

    }
  }),
  on(InscripcionesActions.createInscriptionFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    }
  }),
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

