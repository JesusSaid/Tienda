import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UsuarioIn} from '../../models/usuarioIn';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  usuarioActual : any;
  //usuario= new Usuario;
  usuarios = new UsuarioIn();
  constructor(private usuarioService: UsuarioService, private router: Router){
    
  }
  agregarUsuario(){
    //console.log(this.usuarios);
    this.usuarioService.insertar(this.usuarios).subscribe((resUsuarios:any)=>{
      //console.log(resUsuarios);
      this.usuarioActual = resUsuarios;
      this.router.navigate(['homecliente/categoria']);
    },
      (err:any) => console.error(err)
    );
  }
}
