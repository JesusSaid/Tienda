import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioIn } from '../../models/usuarioIn';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { ExcelService } from 'src/app/services/excel.service';
import { environment } from 'src/app/environments/environment';
declare var $: any;
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  liga: string = environment.API_URI_IMAGENES;
  usuarios: any;
  usuarioActual = new UsuarioIn;
  file: any;
  uploadEvent: any;
  arrayBuffer: any;
  exceljsondata:any;
  pageSize = 5;
  p = 1;
  constructor(private usuariosService: UsuarioService, private comunicacionService: ComunicacionService, private excelService: ExcelService) {
    comunicacionService.observador$.subscribe(
      (msg) => {
        if (msg.componente == 1) {
          this.usuariosService.list().subscribe((resUsuarios: any) => {
            //console.log(resUsuarios);
            this.usuarios = resUsuarios;
          },
            (err: any) => console.error(err)
          );
        }
      }
    )

    this.usuariosService.list().subscribe((resUsuarios: any) => {
      //console.log(resUsuarios);
      this.usuarios = resUsuarios;
    },
      (err: any) => console.error(err)
    );
  }

  ngOnInit() {
    //console.log("Iniciando");
   /* this.usuarioActual = new UsuarioIn();


    $(document).ready(function () {
      $(".modal").modal();

    })*/
  }

  eliminarUsuario(id: any) {
    //console.log("Eliminar usuario " + id);
    this.usuariosService.eliminar(id).subscribe((resUsuarios: any) => {
      //console.log(resUsuarios);
      this.usuariosService.list().subscribe((resUsuarios: any) => {
        //console.log(resUsuarios);
        this.usuarios = resUsuarios;
      },
        (err: any) => console.error(err)
      );
    },
      (err: any) => console.error(err)
    );
  }
  agregarUsuario() {
    //console.log("agregar usuario");
    //console.log(this.usuarioActual);
    this.usuariosService.insertar(this.usuarioActual).subscribe((resUsuarios: any) => {
      //console.log(resUsuarios);
      this.usuariosService.list().subscribe((resUsuarios: any) => {
        //console.log(resUsuarios);
        this.usuarios = resUsuarios;
      },
        (err: any) => console.error(err)
      );
    },
      (err: any) => console.error(err)
    );
  }
  visualizarUsuario(id: any) {
    //console.log("visualizar usuario " + id);
    this.usuariosService.listOne(id).subscribe((resUsuarios: any) => {
      //console.log(resUsuarios);
      this.usuarioActual = resUsuarios;
    },
      (err: any) => console.error(err)
    );
  }
  editarUsuario(id: any) {
    //console.log(this.usuarioActual);
    this.usuariosService.update(this.usuarioActual).subscribe((resUsuarios: any) => {
      //console.log(resUsuarios);
      this.usuarioActual = resUsuarios;
      this.usuariosService.list().subscribe((resUsuarios: any) => {
        //console.log(resUsuarios);
        this.usuarios = resUsuarios;
      },
        (err: any) => console.error(err)
      );
    },
      (err: any) => console.error(err)
    );
  }

  editarFormularioUsuario(id: any) {
    //console.log('editarUsuario', id);
    //console.log(this.usuarioActual);

    //this.clienteActual=undefined


    this.usuariosService.listOne(id).subscribe((resUsuario: any) => {
      //console.log(resUsuario);
      this.usuarioActual = resUsuario;
      //console.log(this.usuarioActual);

    },
      (err: any) => console.error(err)
    );
  }
  preparar() {
    $('#modalUsuariosActualizar').modal({
      dismissible: false
    });
    $('#modalUsuariosActualizar').modal('open');
  }
  exportAsXLSX() {
    let element = document.getElementById('tabla-1');
    this.excelService.exportAsExcelFile(element, 'USUARIOS');
  }

  cargarExcelUsuario(event: any) {
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
      
      //console.log("vamos a entrar al servicio");
      

      this.usuariosService.insertarExcel(this.exceljsondata).subscribe((resUsuarios: any)=>{        
      },
        (err: any) => console.error(err)
      );

      /*this.vehiculoService.list().subscribe((resVehiculos: any) => {
        console.log(resVehiculos);
        this.vehiculos = resVehiculos;
      },
        (err: any) => console.error(err)
      );*/
    }
  }
}
