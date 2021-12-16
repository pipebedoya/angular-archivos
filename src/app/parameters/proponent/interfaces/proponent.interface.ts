export interface Proponent {
    id:                 number;
    documento:          string;
    primer_nombre:      string;
    otros_nombres?:      null;
    primer_apellido:    string;
    segundo_apellido:   string;
    correo:             string;
    celular:            string;
    fotografia?:        string  ;
    id_tipovinculacion: number;
}
