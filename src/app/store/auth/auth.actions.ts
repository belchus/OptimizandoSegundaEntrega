import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/core/models/alumnos.model";

export const EstablecerUsuarioAuth = createAction(
    '[auth] Establecer usuario',
    props<{payload:Usuario & {token:string}}>(),
);


export const EliminarUsuarioAuth = createAction ('[auth]Quitar Usuario')