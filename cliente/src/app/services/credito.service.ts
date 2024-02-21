import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor(private http: HttpClient) { }
  verificarCredito(id:any){
    return this.http.get(`${environment.API_URI}/creditos/verificarCredito/`+id,{headers: headers});
  }
  insertar(credito:any){
    return this.http.post(`${environment.API_URI}/creditos/`,credito,{headers: headers});
  }
}
