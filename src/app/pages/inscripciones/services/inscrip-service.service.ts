import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscripcionCompleta } from '../models';
import { enviroment } from 'src/enviroments/enviroments.prod';

@Injectable({
  providedIn: 'root'
})
export class InscripService {

  
  constructor(private httpClient:HttpClient) { }
getAllInscrip():Observable<InscripcionCompleta>{
  return this.httpClient.get<InscripcionCompleta>(`${enviroment.apiBaseUrl}/inscripciones`)
}

}

