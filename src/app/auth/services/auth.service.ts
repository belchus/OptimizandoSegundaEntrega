import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject, map, catchError, throwError, of } from 'rxjs';
import { Usuario } from 'src/app/core/models/alumnos.model';
import { AppState } from 'src/app/store';
import { EliminarUsuarioAuth, EstablecerUsuarioAuth } from 'src/app/store/auth/auth.actions';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { enviroment } from 'src/enviroments/enviroments.prod';

//Service para el auth y el token del usuario

export interface LoginFormValue {
    email: string;
    password: string;
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
   
    constructor(
      private router: Router,
      private httpClient: HttpClient,
    private store:Store<AppState>
    ) { }

    obtenerUsuarioAutenticado(): Observable<Usuario | null> {
      return this.store.select(selectAuthUser);
    }
    establecerUsuarioAutenticado(usuario:Usuario, token:string):void{
      this.store.dispatch(EstablecerUsuarioAuth({payload:{...usuario,token}}))
    }
    login(formValue: LoginFormValue): void {
      this.httpClient.get<Usuario[]>(
        `${enviroment.apiBaseUrl}/usuarios`,
        {
          params: {
            ...formValue
          },
        }
      ).subscribe({
        next: (usuarios) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token)
            this.establecerUsuarioAutenticado(usuarioAutenticado,usuarioAutenticado.token);
            this.router.navigate(['dashboard']);
          } else {
            alert('¡Usuario y contraseña incorrectos!')
          }
        }
      });
    }
  
    logout(): void {
      localStorage.removeItem('token');
      this.store.dispatch(EliminarUsuarioAuth());
      this.router.navigate(['auth']);
    }
  
    verificarToken(): Observable<boolean> {
      const token = localStorage.getItem('token');
      return this.httpClient.get<Usuario[]>(
        `${enviroment.apiBaseUrl}/usuarios?token=${token}`,
        {
          headers: new HttpHeaders({
            'Authorization': token || '',
          }),
        }
      )
        .pipe(
          map((usuarios) => {
            const usuarioAutenticado = usuarios[0];
            if (usuarioAutenticado) {
              localStorage.setItem('token', usuarioAutenticado.token)
              this.establecerUsuarioAutenticado(usuarioAutenticado,usuarioAutenticado.token);
            }
            return !!usuarioAutenticado;
          }),
          catchError((err) => {
            alert('Error al verificar el token');
          //si esta caida la api
           return of (false);
           //sino usar
           //return throwError(() => err);
          })
        );
    }
  }