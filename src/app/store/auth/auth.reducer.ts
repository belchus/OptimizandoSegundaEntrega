import { createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/core/models/alumnos.model";
import { EliminarUsuarioAuth, EstablecerUsuarioAuth } from "./auth.actions";

export const authFeatureKey= 'auth';
export interface AuthState{
    authUser:Usuario | null;
    token: string | null;
}
const initialState:AuthState ={
    authUser:null,
    token: localStorage.getItem('token')||  null,
    }
    

export const authReducer = createReducer(initialState,
    on(EstablecerUsuarioAuth,(currentState,action)=>{
    return{
        authUser:action.payload,
        token:action.payload.token
    }
}),
on(EliminarUsuarioAuth,(currentState)=>{
    return{
        authUser:null,
        token:null
    }
})
)