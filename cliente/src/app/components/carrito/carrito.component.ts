import { Component } from '@angular/core';
import Swal from "sweetalert2";
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../models/carrito';
import { CreditoService } from 'src/app/services/credito.service';
import { DebitoService } from 'src/app/services/debito.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carritos: any;
  carritoActual = new Carrito;
  totalCarrito: any;
  idCredito = 1;
  idDebito = 2;
  idTransferencia = 3;
  id = Number(localStorage.getItem("idUsuario"));
  constructor(private carritoService: CarritoService,
    private debitoService: DebitoService,
    private creditoService: CreditoService,
    private transferenciaService: TransferenciaService,
    private ventaService: VentaService,
    private router: Router) {
    this.carritoService.list(this.id).subscribe((resCarritos: any) => {
      //console.log(resCarritos);
      this.carritos = resCarritos;
      //this.calcularTotalPrecio();
    },
      (err: any) => console.error(err)
    );
    this.carritoService.listtotal(this.id).subscribe((resTotal: any) => {
      //console.log(resTotal);
      this.totalCarrito = resTotal;
    },
      (err: any) => console.error(err)
    );
  }
  eliminarCarrito(id: any) {
    //console.log("Eliminar del carrito " + id);
    this.carritoService.eliminar(id).subscribe((resCarritos: any) => {
      //console.log(resCarritos);
      this.carritoService.list(this.id).subscribe((resCarritos: any) => {
        //console.log(resCarritos);
        this.carritos = resCarritos;
        this.carritoService.listtotal(this.id).subscribe((resTotal: any) => {
          //console.log(resTotal);
          this.totalCarrito = resTotal;
        },
          (err: any) => console.error(err)
        );
        //this.calcularTotalPrecio();
      },
        (err: any) => console.error(err)
      );
    },
      (err: any) => console.error(err)
    );

  }
  agregarCarrito() {
    //console.log("agregar carrito");
    //console.log(this.carritoActual);
    this.carritoService.insertar(this.carritoActual).subscribe((resCarritos: any) => {
      //this.calcularTotalPrecio();
      //console.log(resCarritos);
    },
      (err: any) => console.error(err)
    );
  }
  verificaCredito() {
    this.creditoService.verificarCredito(this.id).subscribe((resCredito: any) => {
      //console.log(resCredito);
      if (resCredito == null) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No tienes una cuenta",
          showConfirmButton: true
        })
        this.router.navigate(['homecliente/credito']);
      } else {
        this.ventaService.crear(this.id, this.idCredito).subscribe((resVenta: any) => {
          //console.log(resVenta);
        },
          (err: any) => console.error(err)
        );
        this.router.navigate(['homecliente/categoria']);
      }
    },
      (err: any) => console.error(err)
    );
  }
  verificaDebito() {
    this.debitoService.verificarDebito(this.id).subscribe((resDebito: any) => {
      //console.log(resDebito);
      if (resDebito == null) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No tienes una cuenta",
          showConfirmButton: true
        })
        this.router.navigate(['homecliente/debito']);
      } else {
        this.ventaService.crear(this.id, this.idDebito).subscribe((resVenta: any) => {
          //console.log(resVenta);
        },
          (err: any) => console.error(err)
        );
        this.router.navigate(['homecliente/categoria']);
      }
    },
      (err: any) => console.error(err)
    );
  }
  verificaTransferencia() {
    this.transferenciaService.verificarTransferencia(this.id).subscribe((resTransferencia: any) => {
      //console.log(resTransferencia);
      if (resTransferencia == null) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No tienes una cuenta",
          showConfirmButton: true
        })
        this.router.navigate(['homecliente/transferencia']);
      } else {
        this.ventaService.crear(this.id, this.idTransferencia).subscribe((resVenta: any) => {
          //console.log(resVenta);
        },
          (err: any) => console.error(err)
        );
        this.router.navigate(['homecliente/categoria']);
      }
    },
      (err: any) => console.error(err)
    );
  }

  /*calcularTotalPrecio() {
    this.totalPrecio = 0;
    this.carritos.forEach((carrito: Carrito) => {
      this.totalPrecio += carrito.precio;
    });
  }*/
}

