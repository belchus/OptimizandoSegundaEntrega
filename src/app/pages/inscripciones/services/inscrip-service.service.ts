import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { CreateInscrption, Inscripcion, InscripcionCompleta } from '../models';
import { enviroment } from 'src/enviroments/enviroments.prod';

@Injectable({
  providedIn: 'root'
})
export class InscripService {

  
  constructor(private httpClient:HttpClient) { }
  createInscripcion(data: CreateInscrption): Observable<InscripcionCompleta> {
    return this.httpClient
      .post<Inscripcion>(`${enviroment.apiBaseUrl}/inscripciones`, data)
      .pipe(
        concatMap((createResponse) =>
          this.getInscriptionWithAllById(createResponse.id)
        )
      );
  }
  getInscriptionWithAllById(id: number): Observable<InscripcionCompleta> {
    return this.httpClient.get<InscripcionCompleta>(
      `${enviroment.apiBaseUrl}/inscripciones/${id}?_expand=alumno&_expand=curso&_expand=insid`
    )}
getAllInscrip():Observable<InscripcionCompleta[]>{
  return this.httpClient.get<InscripcionCompleta[]>(`${enviroment.apiBaseUrl}/inscripciones?_expand=alumno&_expand=curso&_expand=insid`)
}
deleteInscriptionById(id:number):Observable<unknown>{
  return this.httpClient.delete(`${enviroment.apiBaseUrl}/inscripciones/${id}`)
}
}

