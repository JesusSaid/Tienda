export class Carrito {
    idUsuario: number;
    idVehiculo: number;
    cantidad: number;
    total: number;
    constructor() {
        this.idUsuario = 0;
        this.idVehiculo = 0;
        this.cantidad = 1;
        this.total = 0;
    }
}