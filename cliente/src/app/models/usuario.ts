export class Usuario{
    id?: number;
    nombre: string;
    tipo: number;
    password:string;
    correo:string;
    constructor() {
    this.nombre = '';
    this.tipo=0;
    this.correo= "";
    this.password= "";
    }
}