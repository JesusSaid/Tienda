export class Transferencia{
    id?: number;
    idTipopago: number;
    idUsuario: number;
    nombre_banco: string;
    nombre: string;
    numero: number;
    password: string;
    constructor() {
    this.idTipopago=0;
    this.idUsuario=0;
    this.nombre_banco=" ";
    this.nombre=" ";
    this.numero=0;
    this.password=" ";
    }
}