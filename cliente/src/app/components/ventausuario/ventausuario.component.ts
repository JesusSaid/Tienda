import { Component } from '@angular/core';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-ventausuario',
  templateUrl: './ventausuario.component.html',
  styleUrls: ['./ventausuario.component.css']
})
export class VentausuarioComponent {
  ventas: any;
  constructor(private ventaService: VentaService){
    this.ventaService.list2().subscribe((resVentas: any)=>{
      ////console.log(resVentas);
      this.ventas=resVentas;
    },
      (err: any) => console.error(err)
    );
  }

}
