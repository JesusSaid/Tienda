import { Component } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo'
import { CategoriasService } from 'src/app/services/categorias.service';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { environment } from 'src/app/environments/environment';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { ExcelService } from 'src/app/services/excel.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {
  liga: string = environment.API_URI_IMAGENES;
  vehiculos: any;
  vehiculoActual = new Vehiculo();
  categorias: any;
  imgPrincipal: any;
  fileToUpload: any;
  file: any;
  uploadEvent: any;
  arrayBuffer: any;
  exceljsondata: any;
  pageSize = 5;
  p = 1;

  constructor(private vehiculoService: VehiculoService, private categoriasService: CategoriasService, private comunicacionService: ComunicacionService,
    private excelService: ExcelService,
    private imagenesService: ImagenesService) {
    comunicacionService.observador$.subscribe(
      (msg) => {
        //console.log(msg);
        if (msg.componente == 2) {
          this.vehiculoService.list().subscribe((resVehiculos: any) => {
            //console.log(resVehiculos);
            this.vehiculos = resVehiculos;
          },
            (err: any) => console.error(err)
          );
        }
      }
    )

    this.vehiculoService.list().subscribe((resVehiculos: any) => {
      //console.log(resVehiculos);
      this.vehiculos = resVehiculos;
    },
      (err: any) => console.error(err)
    );
  }

  
  eliminarVehiculo(id: any) {
    //console.log("Eliminar vehiculo " + id);
    this.vehiculoService.eliminar(id).subscribe((resVehiculos: any) => {
      //console.log(resVehiculos);
      this.vehiculoService.list().subscribe((resVehiculos: any) => {
        //console.log(resVehiculos);
        this.vehiculos = resVehiculos;
      },
        (err: any) => console.error(err)
      );
    },
      (err: any) => console.error(err)
    );
  }
  agregarVehiculo() {
    //console.log("agregar vehiculo");
    //console.log(this.vehiculoActual);
    this.vehiculoService.insertar(this.vehiculoActual).subscribe((resVehiculos: any) => {
      //console.log(resVehiculos);
      this.vehiculoService.list().subscribe((resVehiculos: any) => {
        //console.log(resVehiculos);
        this.vehiculos = resVehiculos;
      },
        (err: any) => console.error(err)
      );
    },
      (err: any) => console.error(err)
    );
  }
  visualizarVehiculo(id: any) {
    //console.log("visualizar vehiculo " + id);
    this.vehiculoService.listOne(id).subscribe((resVehiculos: any) => {
      //console.log(resVehiculos);
      this.vehiculoActual = resVehiculos;
    },
      (err: any) => console.error(err)
    );
  }
  editarVehiculo(id: any) {
    //console.log(this.vehiculoActual);
    this.vehiculoService.update(this.vehiculoActual).subscribe((resVehiculos: any) => {
      //console.log(resVehiculos);
      this.vehiculoActual = resVehiculos;
      this.vehiculoService.list().subscribe((resVehiculos: any) => {
        //console.log(resVehiculos);
        this.vehiculos = resVehiculos;
      },
        (err: any) => console.error(err)
      );
    },
      (err: any) => console.error(err)
    );
  }
  cargandoImagen(files: any, carpeta: any) {
    //console.log(files.files[0]);

    this.imgPrincipal = null;
    this.fileToUpload = files.files[0];
    let imgPromise = this.getFileBlob(this.fileToUpload);
    imgPromise.then(blob => {
      //console.log(blob);
      //console.log("here");


      this.imagenesService.guardarImagen(350, blob, carpeta).subscribe(
        (res: any) => {
          this.imgPrincipal = blob;
        },
        err => console.error(err));
    })
  }
  getFileBlob(file: any) {
    var reader = new FileReader();
    return new Promise(function (resolve, reject) {
      reader.onload = (function (thefile) {
        return function (e: any) {
          resolve(e.target.result);
        };
      })(file);
      reader.readAsDataURL(file);
    });
  }
  dameNombre(id: any) {
    //console.log("hola");

    return this.liga + "/perfil/" + id + ".jpg"
  }
  onImgError(event: any) {
    event.target.src = this.liga + "/perfil/0.png";
  }
  exportAsXLSX() {
    let element = document.getElementById('tabla-2');
    this.excelService.exportAsExcelFile(element, 'VEHICULOS');
  }
  cargarExcelVehiculo(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadEvent = event;
      //console.log(this.file);
    }
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      //console.log(data);
      

      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      //console.log(workbook);
      
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.exceljsondata = XLSX.utils.sheet_to_json(worksheet, { raw: true })
      //console.log(this.exceljsondata);

      this.vehiculoService.insertarExcel(this.exceljsondata).subscribe((resVehiculos: any)=>{        
      },
        (err: any) => console.error(err)
      );

      /*this.vehiculoService.list().subscribe((resVehiculos: any) => {
        //console.log(resVehiculos);
        this.vehiculos = resVehiculos;
      },
        (err: any) => console.error(err)
      );*/
    }
  }
}
