import { Component } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo';
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../models/carrito';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  vehiculos: any;
  vehiculoActual= new Vehiculo();
  carritoActual= new Carrito();
  carros = 1;
  camionetas = 3;
  motos = 2;
  camiones = 4;
  yates = 6;
  constructor(private vehiculoService: VehiculoService,private carritoService: CarritoService){
    this.vehiculoService.list().subscribe((resVehiculos:any) => {
      //console.log(resVehiculos);
      this.vehiculos=resVehiculos;
    },
        (err:any) => console.error(err)
    );
  }
  listVehiculos(){
    this.vehiculoService.list().subscribe((resVehiculos:any) => {
      //console.log(resVehiculos);
      this.vehiculos=resVehiculos;
    },
        (err:any) => console.error(err)
    );
  }
  categoriaCarro(){
    this.vehiculoService.list2(this.carros).subscribe((resVehiculos:any) => {
      //console.log(resVehiculos);
      this.vehiculos=resVehiculos;
    },
        (err:any) => console.error(err)
    );
  }
  categoriaCamionetas(){
    this.vehiculoService.list2(this.camionetas).subscribe((resVehiculos:any) => {
      //console.log(resVehiculos);
      this.vehiculos=resVehiculos;
    },
        (err:any) => console.error(err)
    );
  }
  categoriaMotos(){
    this.vehiculoService.list2(this.motos).subscribe((resVehiculos:any) => {
      //console.log(resVehiculos);
      this.vehiculos=resVehiculos;
    },
        (err:any) => console.error(err)
    );
  }
  categoriaCamiones(){
    this.vehiculoService.list2(this.camiones).subscribe((resVehiculos:any) => {
      //console.log(resVehiculos);
      this.vehiculos=resVehiculos;
    },
        (err:any) => console.error(err)
    );
  }
  agregarCarrito(id:any,precio:any){
    //console.log("agregar vehiculo");
    //console.log(this.carritoActual);
    this.carritoActual.idUsuario=Number(localStorage.getItem("idUsuario"));
    this.carritoActual.idVehiculo=id;
    this.carritoActual.total=precio;
    this.carritoService.insertar(this.carritoActual).subscribe((resCarritos:any)=>{
      //console.log(resCarritos);
    },
      (err:any)=>console.error(err)
    );
  }
}