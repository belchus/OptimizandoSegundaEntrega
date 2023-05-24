import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { AuthState, authFeatureKey } from "./auth.reducer";
import { Usuario } from "src/app/core/models/alumnos.model";
import { state } from "@angular/animations";

export const selectAuthState =createFeatureSelector<AuthState>(authFeatureKey);


export const selectAuthUser = createSelector(
    selectAuthState,(state) =>state.authUser
);