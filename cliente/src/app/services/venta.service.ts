import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { InjectSetupWrapper } from '@angular/core/testing';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get(`${environment.API_URI}/ventas/`, {headers: headers});
  }
  list2(){
    return this.http.get(`${environment.API_URI}/ventas/list2`, {headers: headers});
  }
  crear(idUsuario:any, idFormapago:any){
    let venta = {
      'idUsuario':idUsuario,
      'idFormapago':idFormapago
    }
    //console.log(`${environment.API_URI}/ventas/crearVenta`);
    return this.http.post(`${environment.API_URI}/ventas/crearVenta`,venta,{headers: headers});
  }
}
