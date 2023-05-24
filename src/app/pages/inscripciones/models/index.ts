import { Curso } from "../../cursos/cursos.component";
import { Alumno } from "../../tablas/tablas.component";



export interface Inscripcion{
    id:number;
    alumnoid:number;
    cursoid:number
}

export interface InscripcionAlumno extends Inscripcion{
    estudiante:Alumno;
}

export interface InscripcionCurso extends Inscripcion{
    curso:Curso
}

export type InscripcionCompleta = InscripcionAlumno & InscripcionCurso;