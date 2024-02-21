export class Pago {
    id?: number;
    idUsuario: number;
    nombre: string;
    numero: number;
    fecha: string;
    password: string;
    constructor() {
        this.idUsuario = 0;
        this.nombre = " ";
        this.numero = 0;
        this.fecha = " ";
        this.password = " ";
    }
}