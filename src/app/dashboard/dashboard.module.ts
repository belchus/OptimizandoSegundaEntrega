import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TablasModule } from '../pages/tablas/tablas.module';
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { CursosComponent } from '../pages/cursos/cursos.component';
import { CursosModule } from '../pages/cursos/cursos.module';
import { CursoDetalleComponent } from '../pages/cursos/curso-detalle/curso-detalle.component';
import { AlumboDetalleComponent } from '../pages/tablas/alumbo-detalle/alumbo-detalle.component';
import { TablasComponent } from '../pages/tablas/tablas.component';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TablasModule,
    DirectivesModule,
    RouterModule,
    MatListModule,
    CursosModule,
    RouterModule.forChild([
      {
        path: 'estudiantes',
        loadChildren: () => import('../pages/tablas/tablas.module').then((m) => m.TablasModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../pages/cursos/cursos.module').then((m) => m.CursosModule),
      }
    ])
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }

function m(value: typeof import("c:/Users/belu9/Desktop/Copia para entrega6/src/app/pages/tablas/tablas.module")): typeof import("c:/Users/belu9/Desktop/Copia para entrega6/src/app/pages/tablas/tablas.module") | PromiseLike<typeof import("c:/Users/belu9/Desktop/Copia para entrega6/src/app/pages/tablas/tablas.module")> {
  throw new Error('Function not implemented.');
}
