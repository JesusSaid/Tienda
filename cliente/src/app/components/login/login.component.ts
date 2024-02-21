import { Component } from '@angular/core';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { CorreoService } from 'src/app/services/correo.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new Usuario();
  resId: any;
  constructor(private usuarioService: UsuarioService,private correoService: CorreoService, private router: Router) {

  }
  verificarUsuario() {
    this.usuarioService.VerficarUsuario(this.usuario.correo, this.usuario.password).subscribe((resUsuario: any) => {
      //console.log(resUsuario);
      if (resUsuario == null) {
        //console.log("el usuario no existe");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "correo o contraseña inválido",
          showConfirmButton: true
        })
      }else{
        //console.log("el usuario existe");
        localStorage.setItem("tipoUsuario", resUsuario.tipo + " ");
        if(resUsuario.tipo == 1){
          this.router.navigate(['home/vehiculo']);
        }else{
          localStorage.setItem("idUsuario",resUsuario.id);
          this.resId=Number(localStorage.getItem("idUsuario"));
          //console.log(this.resId);
          this.router.navigate(['homecliente/categoria']);
        }
       
      }
    },
      (err: any) => console.error(err)
    );
  }

  cambiarPassword(){
    //console.log(this.usuario)
    //console.log("here");
    this.correoService.enviarCorreoRecuperarPassword(this.usuario).subscribe((resUsuario: any)=>
      {
        //console.log("entro");
        
        //console.log(resUsuario);
      },
        (err: any) => console.error(err)
    )
  }
}
