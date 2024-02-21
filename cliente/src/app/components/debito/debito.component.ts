import { Component } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { Debito } from 'src/app/models/debito';
import { DebitoService } from 'src/app/services/debito.service';

@Component({
  selector: 'app-debito',
  templateUrl: './debito.component.html',
  styleUrls: ['./debito.component.css']
})
export class DebitoComponent {
  debitoActual: any;
  debitos= new Debito();
  id:any;
  constructor(private debitoService: DebitoService, private router: Router){

  }
  verificarDebito() {
    this.id=Number(localStorage.getItem("idUsuario"));
    this.debitoService.verificarDebito(this.id).subscribe((resDebito: any) => {
      //console.log(resDebito);
      if (resDebito == null) {
        
        //console.log(this.debitos);
        this.debitos.idUsuario=Number(localStorage.getItem("idUsuario"));
        this.debitos.idTipopago=2;
        this.debitoService.insertar(this.debitos).subscribe((resDebitos:any)=>{
          //console.log(resDebitos);
          this.debitoActual = resDebitos;
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
  agregarDebito(){
    //console.log(this.debitos);
    this.debitos.idUsuario=Number(localStorage.getItem("idUsuario"));
    this.debitos.idTipopago=2;
    this.debitoService.insertar(this.debitos).subscribe((resDebitos:any)=>{
      //console.log(resDebitos);
      this.debitoActual = resDebitos;
      this.router.navigate(['homecliente/categoria']);
    },
      (err:any) => console.error(err)
    );
  }
}
