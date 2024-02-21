import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }
  verificarTransferencia(id:any){
    return this.http.get(`${environment.API_URI}/transferencias/verificarTransferencia/`+id,{headers: headers});
  }
  insertar(transferencia:any){
    return this.http.post(`${environment.API_URI}/transferencias/`,transferencia,{headers: headers});
  }
}
