import { Component, OnInit } from '@angular/core';
import { InscripService } from './services/inscrip-service.service';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { Observable } from 'rxjs';
import { State } from './store/inscripciones.reducer';
import { selectInscripcionesState } from './store/inscripciones.selectors';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesDialogComponent } from './components/inscripciones-dialog/inscripciones-dialog.component';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit{
  state$:Observable<State>;
  dataSource = new MatTableDataSource();
  
  displayedColumns: string[] = ['cursoId','alumnoId','delete','avatar','icon'];

constructor(private inscripService:InscripService,
  private matDialog:MatDialog,
  private store:Store){
    this.state$ =this.store.select(selectInscripcionesState);
  }

ngOnInit():void{
 
//this.inscripService.getAllInscrip().subscribe(console.log);
this.store.dispatch(InscripcionesActions.loadInscripciones())
  }

deleteInscriptionById(id:number):void{
  this.store.dispatch(InscripcionesActions.deleteInscription({id}))
}

addInscripcion():void{
  this.matDialog.open(InscripcionesDialogComponent);

}

}
