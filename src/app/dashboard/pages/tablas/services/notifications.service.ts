import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
private mensaje$ = new Subject()

  constructor() { 
    this.mensaje$.subscribe((msg)=> alert(msg));
  }
  mostrarMensaje(msg:string){
    this.mensaje$.next(msg);
  };
}
