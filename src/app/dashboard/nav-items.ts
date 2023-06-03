export interface NavItem{
    path:string;
    title:string;
    icon?:string;
    allowedRoles:string[];
}
const links:NavItem[]=[
    {
        path:'estudiantes',
        title:'Estudiantes',
        icon: 'person',
        allowedRoles:[]
    },
    {
        path:'cursos',
        title:'Cursos',
        allowedRoles:[]
    },
    {
        path:'inscripciones',
        title:'Inscripciones',
        allowedRoles:['admin'],
    },

]

export default links;