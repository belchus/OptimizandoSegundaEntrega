import { Curso } from "../../cursos/cursos.component";
import { Alumno } from "../../tablas/tablas.component";



export interface Inscripcion{
    id:number;
    alumnoId:number;
    cursoId:number;

}

export interface InscripcionAlumno extends Inscripcion{
    alumno:Alumno;
}

export interface InscripcionCurso extends Inscripcion{
    curso:Curso
}
export interface CreateInscrption{
    id:number;
    alumnoId:number;
    cursoId:number;
}
export type InscripcionCompleta = InscripcionAlumno & InscripcionCurso;