import { Component } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
  transferenciaActual: any;
  transferencias= new Transferencia();
  id: any;
  constructor(private transferenciaService: TransferenciaService, private router: Router){

  }
  verificarTransferencia() {
    this.id=Number(localStorage.getItem("idUsuario"));
    this.transferenciaService.verificarTransferencia(this.id).subscribe((resTransferencia: any) => {
      //console.log(resTransferencia);
      if (resTransferencia == null) {
        
          //console.log(this.transferencias);
          this.transferencias.idUsuario=Number(localStorage.getItem("idUsuario"));
          this.transferencias.idTipopago=3;
          this.transferenciaService.insertar(this.transferencias).subscribe((resTransferencias:any)=>{
            //console.log(resTransferencias);
            this.transferenciaActual = resTransferencias;
            this.router.navigate(['homecliente/carrito']);
          },
            (err:any) => console.error(err)
          );
        
      }else{
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

  agregarTransferencia(){
    //console.log(this.transferencias);
    this.transferencias.idUsuario=Number(localStorage.getItem("idUsuario"));
    this.transferencias.idTipopago=3;
    this.transferenciaService.insertar(this.transferencias).subscribe((resTransferencias:any)=>{
      //console.log(resTransferencias);
      this.transferenciaActual = resTransferencias;
      this.router.navigate(['homecliente/carrito']);
    },
      (err:any) => console.error(err)
    );
  }
}
