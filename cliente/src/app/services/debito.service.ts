import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class DebitoService {

  constructor(private http: HttpClient) { }
  verificarDebito(id:any){
    return this.http.get(`${environment.API_URI}/debitos/verificarDebito/`+id,{headers: headers});
  }
  insertar(debito:any){
    return this.http.post(`${environment.API_URI}/debitos/`,debito,{headers: headers});
  }
}
