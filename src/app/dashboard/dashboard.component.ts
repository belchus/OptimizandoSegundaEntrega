import { Component } from '@angular/core';
import links from './nav-items';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../core/models/alumnos.model';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  showFiller = false;
  links = links

  authUser$: Observable<Usuario | null>;

 

  destroyed$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    this.authUser$ = this.authService.obtenerUsuarioAutenticado()

    // this.authService.obtenerUsuarioAutenticado()
    //   .pipe(
    //     // tomar hasta que el componente se destruya
    //     takeUntil(this.destroyed$)
    //   )
    //   .subscribe((usuario) => this.authUser = usuario);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  logout(): void {
    this.authService.logout();
  }
}
