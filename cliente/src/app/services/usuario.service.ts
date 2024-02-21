import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {retry} from 'rxjs';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  VerficarUsuario(correo:any, password:any){
    let usuario = {
      'correo':correo,
      'password':password
    }
    ////console.log(`${environment.API_URI}/usuarios/verificarUsuario`);
    return this.http.post(`${environment.API_URI}/usuarios/verificarUsuario`,usuario,{headers: headers});
  }
  insertar(usuario:any){
    return this.http.post(`${environment.API_URI}/usuarios/`,usuario,{headers: headers});
  }
  list(){
    return this.http.get(`${environment.API_URI}/usuarios/`, {headers: headers});
  }
  eliminar(id:any){
    return this.http.delete(`${environment.API_URI}/usuarios/delete/`+id,{headers: headers});
  }
  listOne(id:any){
    return this.http.get(`${environment.API_URI}/usuarios/`+id, {headers: headers});
  }
  update(usuario:any){
    return this.http.put(`${environment.API_URI}/usuarios/update/`+usuario.id,usuario,{headers: headers});
  }
  CambiarPassword(usuario: any) {
    return this.http.post(`${environment.API_URI}/usuarios/CambiarPassword`, usuario,{headers: headers});
  }
  insertarExcel(usuario:any){
    return this.http.post(`${environment.API_URI}/usuarios/excel`,usuario,{headers: headers});
  }
}
