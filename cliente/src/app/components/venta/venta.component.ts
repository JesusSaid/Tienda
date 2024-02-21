import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { VentaService } from 'src/app/services/venta.service';
import { ExcelService } from 'src/app/services/excel.service';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  liga: string = environment.API_URI_IMAGENES;
  ventas: any;
  constructor(private ventaService: VentaService, private excelService:ExcelService){
    this.ventaService.list().subscribe((resVentas: any)=>{
      ////console.log(resVentas);
      this.ventas=resVentas;
    },
        (err: any) => console.error(err)
    );
  }
  exportAsXLSX() {
    let element = document.getElementById('tabla-3');
    this.excelService.exportAsExcelFile(element, 'VENTAS');
  }

}
