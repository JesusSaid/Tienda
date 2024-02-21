import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { InjectSetupWrapper } from '@angular/core/testing';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  list(){
    return this.http.get(`${environment.API_URI}/vehiculos/`, {headers: headers});
  }
  listAdmin(){
    return this.http.get(`${environment.API_URI}/vehiculos/admin`, {headers: headers});
  }
  eliminar(id:any){
    return this.http.delete(`${environment.API_URI}/vehiculos/delete/`+id,{headers: headers});
  }
  listOne(id:any){
    return this.http.get(`${environment.API_URI}/vehiculos/`+id, {headers: headers});
  }
  list2(id:any){
    return this.http.get(`${environment.API_URI}/vehiculos/categoria/`+id, {headers: headers});
  }
  insertar(vehiculo:any){
    return this.http.post(`${environment.API_URI}/vehiculos/`,vehiculo,{headers: headers});
  }
  update(vehiculo:any){
    return this.http.put(`${environment.API_URI}/vehiculos/update/`+vehiculo.id,vehiculo,{headers: headers});
  }
  insertarExcel(vehiculo:any){
    return this.http.post(`${environment.API_URI}/vehiculos/excel`,vehiculo,{headers: headers});
  }
}
