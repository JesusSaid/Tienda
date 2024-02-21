import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient) { }
  insertar(carrito:any){
    return this.http.post(`${environment.API_URI}/carritos/`,carrito,{headers: headers});
  }
  list(id:any){
    return this.http.get(`${environment.API_URI}/carritos/`+id,{headers: headers});
  }
  listtotal(id:any){
    return this.http.get(`${environment.API_URI}/carritos/total/`+id,{headers: headers});
  }
  eliminar(id:any){ 
    return this.http.delete(`${environment.API_URI}/carritos/delete/`+id,{headers: headers});
  }
}
