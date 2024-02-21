import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioIn } from 'src/app/models/usuarioIn';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { Vehiculo } from 'src/app/models/vehiculo';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
//import * as $ from 'jquery';
declare var $ : any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  usuarios : any
  usuarioActual = new UsuarioIn();
  vehiculos: any;
  vehiculoActual= new Vehiculo();
  tipoUsuario:number
  categorias:any;

  constructor(private router: Router,
    private usuariosService:UsuarioService,
    private vehiculoService:VehiculoService,
    private comunicacionService: ComunicacionService) {
    
    this.tipoUsuario = Number(localStorage.getItem("tipoUsuario"));
    //console.log(this.tipoUsuario);
  }

  enviarMensaje(componente: number){
    let opciones = {"componente": componente};
    //console.log(opciones);
    this.comunicacionService.enviar(opciones);
  }
  
  ngOnInit() {
   /* $(document).ready(function ()
    {
      $(".modal").modal();

    })  */
    
  }

  agregarUsuario(){
    //console.log("agregar usuario");
    //console.log(this.usuarioActual);
    this.usuariosService.insertar(this.usuarioActual).subscribe((resUsuarios:any)=>{
      //console.log(resUsuarios);
      this.enviarMensaje(1);
    },
      (err:any)=>console.error(err)
    );
  }
  agregarVehiculo(){
    //console.log("agregar vehiculo");
    //console.log(this.vehiculoActual);
    this.vehiculoService.insertar(this.vehiculoActual).subscribe((resVehiculos:any)=>{
      //console.log(resVehiculos);
      this.enviarMensaje(2);
    },
      (err:any)=>console.error(err)
    );
  }
  /*visualizarFormularioUsuario(){
    $('#modalUsuarios').modal({
      dismissible: false
    });
    $('#modalAgregar').modal('open');
    $('#modalUsuarios').modal();
    $('#modalUsuarios').modal("open");
  }
  */
  salir(){
    localStorage.removeItem("tipoUsuario")
    this.router.navigate(['login'])
    //console.log("salir")
  }
}
