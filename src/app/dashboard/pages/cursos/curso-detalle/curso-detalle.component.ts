import { Component } from '@angular/core';
import { Curso } from '../cursos.component';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.scss']
})
export class CursoDetalleComponent {

 cursos: Curso | undefined;

  private destroyed$ = new Subject()

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: CursosService,
  ) {
    this.alumnosService. getCursoById(parseInt(this.activatedRoute.snapshot.params['id']))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((cursos) => this.cursos = cursos);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
