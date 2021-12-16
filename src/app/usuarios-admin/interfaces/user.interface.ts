export interface User {
    id:           number;
    nombre?:       string;
    apellido?:     string;
    correo?:       string;
    celular?:      string;
    estado?:       string;
    tiene_muchos: UserxRol[];
}

export interface UserxRol {
    id?:         number;
    id_usuario?: number;
    id_rol:     number;
    pertenece_a: Rol;
}

export interface Rol {
    id:     number;
    nombre: string;
}