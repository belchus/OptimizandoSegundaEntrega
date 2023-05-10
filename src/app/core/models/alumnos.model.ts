

  export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    role: string;
    email: string;
    token: string;
    password:string;
  }


  export interface Curso {
    id: number;
    nombre: string;
    profesor:string;
    vacantes:number;
    fecha_inicio: Date;
    
  }


  
  export interface CrearCursoPayload {
    nombre: string;
    profesor:string;
    vacantes:number;
    fecha_inicio: Date;
  }
  export interface CrearAlumnoPayload {
    nombre: string;
    apellido:string;
    email:string;
    promedio:number;
    fecha_registro: Date;
  }
  

  