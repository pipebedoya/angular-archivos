export interface AuthResp {
    ok?:           boolean;
    tk?:          string;
    usuario?:     Usuario;
    usuarioxrol?: Usuarioxrol;
    mensaje?:     string;
    token?:       ValidacionToken;
}

export interface Respuesta {
    ok?: boolean;
    OK: string;
}

export interface Usuario {
    id?:          number;
    nombre?:      string;
    apellido?:    string;
    correo?:      string;
    celular?:     string;
    estado?:      string;
}

export interface Usuarioxrol {
    id?:         number;
    id_usuario?: number;
    id_rol?:     number;
}

export interface ValidacionToken {
    ok:    boolean;
    data?:  DataToken;
    token?: Token;
}

export interface DataToken {
    id_usuario?: number;
    nombre?:     string;
    rol?:        number;
}

export interface Token {
    token?: string;
}
