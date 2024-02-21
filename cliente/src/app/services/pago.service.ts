import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http: HttpClient) { }
  verificarPago(id:any){
    return this.http.get(`${environment.API_URI}/pagos/verificarPago/`+id,{headers: headers});
  }
  insertar(pago:any){
    return this.http.post(`${environment.API_URI}/pagos/`,pago, {headers: headers});
  }
}
