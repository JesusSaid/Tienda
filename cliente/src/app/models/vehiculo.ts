export class Vehiculo{
    id:number;
    marca:string;
    modelo:string;
    year:string;
    color:string;
    carroceria:string;
    cantidad:number;
    descripcion:string;
    precio:number;
    categoria:number;
    constructor(){
        this.id= 0;
        this.marca=" ";
        this.modelo=" ";
        this.year=" ";
        this.color=" ";
        this.carroceria=" ";
        this.cantidad= 0;
        this.descripcion=" ";
        this.precio= 0;
        this.categoria= 0;

    }
}