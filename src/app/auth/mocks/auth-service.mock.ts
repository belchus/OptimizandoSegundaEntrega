import { Usuario } from "src/app/core/models/alumnos.model";
import { LoginFormValue } from "../services/auth.service";
import { BehaviorSubject, Observable, of } from "rxjs";


    export const TEST_MOCK: Usuario = {
        id: 1,
        apellido: 'esprueba',
        email: 'test@gmail.com',
        nombre: 'testing',
        role: 'admin',
        token: '199917ABC',
        password: '12312312',
      }
      
      export class AuthServiceMock {
      
        private authUser$ = new BehaviorSubject<Usuario | null>(null);
      
        login(formValue: LoginFormValue): void {
          this.authUser$.next(TEST_MOCK);
        }
      
        verificarToken(): Observable<boolean> {
          return of(true);
        }
}