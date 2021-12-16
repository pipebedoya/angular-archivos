import { TRequest } from '../../t-request/interfaces/t_request.interface';
import { Modality } from '../../modality/interfaces/modality.interface';
import { Area } from '../../i-area/interfaces/area.interface';
import { State } from '../../state/interfaces/state.interface';
export interface Request {
    id:                   number;
    fecha_radicado:       Date;
    nombre_trabajo:       string;
    descripcion:          string;
    trabajo:              string;
    id_tiposolicitud:     number;
    id_modalidad:         number;
    id_areainvestigacion: number;
    id_estado:            number;
    idtiposolicitud:      TRequest;
    idmodalidad:          Modality;
    idareainvestigacion:  Area;
    idestado:             State;
}