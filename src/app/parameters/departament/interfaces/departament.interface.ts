import { Faculty } from '../../faculty/interfaces/faculty.interface';
export interface Departament {
    id:number;
    nombre:string;
    id_facultad: number;
    idfacultad: Faculty;
}
