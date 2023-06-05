import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablasComponent } from './dashboard/pages/tablas/tablas.component';
import { AlumboDetalleComponent } from './dashboard/pages/tablas/alumbo-detalle/alumbo-detalle.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { CursoDetalleComponent } from './dashboard/pages/cursos/curso-detalle/curso-detalle.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginGuard } from './auth/guards/login.guard';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [

  {

    path: 'dashboard',
   canActivate: [AuthGuard],
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },


  {
    path: 'auth',
   canActivate: [LoginGuard],
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },


  {

    path: '**',
    redirectTo: 'dashboard',
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  
    RouterModule,
  ]
})
export class AppRoutingModule { }
