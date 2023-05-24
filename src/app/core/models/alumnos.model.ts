


  export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    role: string;
    email: string;
    token: string;
    password:string;
    avatar:string;
  }


  export interface Curso {
    id: number;
    cursoid:number;
    nombre: string;
    profesor:string;
    vacantes:number;
    fecha_inicio: Date;
    icono:string;
    
  }

  export interface CursoIns{
    cursoid:number;
    nombre:string;


}

export interface CursoId extends Curso{
  idcurso:CursoId;
}
  
  export interface CrearCursoPayload {
    nombre: string;
    profesor:string;
    vacantes:number;
    fecha_inicio: Date;
    icono:string;
  }
  export interface CrearAlumnoPayload {
    nombre: string;
    apellido:string;
    email:string;
    promedio:number;
    avatar:string;
    fecha_registro: Date;
  }
  

  