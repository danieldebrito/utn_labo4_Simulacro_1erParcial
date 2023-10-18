import { Pais } from "./pais";

export class Actor {
    constructor(
        public id?: string,
        public nombre?: string,
        public apellido?: string,
        public sexo?: string,
        public fechaNacimiento?: string,
        public foto?: string,
        public paisOrigen?: Pais,
    ) { }
}
