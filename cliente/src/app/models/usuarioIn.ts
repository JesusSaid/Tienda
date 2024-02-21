export class UsuarioIn{
    id:number;
    nombre:string;
    edad:number;
    sexo:string;
    pais:string;
    ciudad:string;
    direccion:string;
    telefono:number;
    correo:string;
    password:string;
    tipo:number;
    constructor(){
        this.id=0;
        this.nombre="";
        this.edad=0;
        this.sexo="";
        this.pais="";
        this.ciudad="";
        this.direccion="";
        this.telefono=0;
        this.correo="";
        this.password="";
        this.tipo= 3;
    }
}