export class Credito {
    id?: number;
    idTipopago: number;
    idUsuario: number;
    nombre: string;
    numero: number;
    fecha: string;
    password: string;
    constructor() {
        this.idTipopago = 0;
        this.idUsuario = 0;
        this.nombre = " ";
        this.numero = 0;
        this.fecha = " ";
        this.password = " ";
    }
}