import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioIn } from '../../models/usuarioIn';
import { environment } from 'src/app/environments/environment';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario = new UsuarioIn;
  id = Number(localStorage.getItem("idUsuario"));
  liga: string = environment.API_URI_IMAGENES;
  imgPrincipal: any;
  fileToUpload: any;

  constructor(private usuariosService: UsuarioService, private imagenesService: ImagenesService){
    this.usuariosService.listOne(this.id).subscribe((resUsuarios: any) => {
      //console.log(resUsuarios);
      this.usuario = resUsuarios;
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
      

      this.imagenesService.guardarImagen(this.id, blob, carpeta).subscribe(
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
  dameNombre(id:any){
    //console.log("hola");
    
    return this.liga+"/perfil/"+id+".jpg"
  }
  onImgError(event:any){
    event.target.src=this.liga+"/perfil/0.png";    
  }

}
