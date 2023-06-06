//NavItems con los paths y los roles permitidos en cada uno

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
        icon: 'folder',
        allowedRoles:[]
    },
    {
        path:'inscripciones',
        title:'Inscripciones',
        icon: 'list_alt',
        allowedRoles:[],
    },

]

export default links;