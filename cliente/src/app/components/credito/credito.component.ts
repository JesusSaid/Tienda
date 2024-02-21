import { Component } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { Credito } from 'src/app/models/credito';
import { CreditoService } from 'src/app/services/credito.service';
import { Pago } from 'src/app/models/pago';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent {
  creditoActual: any;
  creditos = new Credito();
  id: any;
  constructor(private creditoService: CreditoService, private router: Router) {

  }
  verificarCredito() {
    this.id = Number(localStorage.getItem("idUsuario"));
    this.creditoService.verificarCredito(this.id).subscribe((resCredito: any) => {
      ////console.log(resCredito);
      if (resCredito == null) {

        ////console.log(this.creditos);
        this.creditos.idUsuario = Number(localStorage.getItem("idUsuario"));
        this.creditos.idTipopago = 1;
        this.creditoService.insertar(this.creditos).subscribe((resCreditos: any) => {
          ////console.log(resCreditos);
          this.creditoActual = resCreditos;
          this.router.navigate(['homecliente/carrito']);
        },
          (err: any) => console.error(err)
        );

      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Ya tienes una cuenta",
          showConfirmButton: true
        })
        this.router.navigate(['homecliente/categoria']);
      }
    },
      (err: any) => console.error(err)
    );
  }
  agregarCredito() {
    ////console.log(this.creditos);
    this.creditos.idUsuario = Number(localStorage.getItem("idUsuario"));
    this.creditos.idTipopago = 1;
    this.creditoService.insertar(this.creditos).subscribe((resCreditos: any) => {
      ////console.log(resCreditos);
      this.creditoActual = resCreditos;
      this.router.navigate(['homecliente/carrito']);
    },
      (err: any) => console.error(err)
    );
  }
}
