interface NavItem{
    path:string;
    title:string;
    icon?:string;
}
const links:NavItem[]=[
    {
        path:'estudiantes',
        title:'Estudiantes',
        icon: 'person',
    },
    {
        path:'cursos',
        title:'Cursos'
    },
    {
        path:'inscripciones',
        title:'Inscripciones'
    },

]

export default links;