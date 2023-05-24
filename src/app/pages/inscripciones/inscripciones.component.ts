import { Component, OnInit } from '@angular/core';
import { InscripService } from './services/inscrip-service.service';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit{
constructor(private inscripService:InscripService,
  private store:Store){}

ngOnInit():void{
 
//this.inscripService.getAllInscrip().subscribe(console.log);
this.store.dispatch(InscripcionesActions.loadInscripciones())
  }



}
