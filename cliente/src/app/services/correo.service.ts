import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(private http: HttpClient) { }
  enviarCorreoRecuperarPassword(body: any) {
    return this.http.post(`${environment.API_URI_CORREOS}/enviarCorreoRecuperarPassword/`, body,{headers: headers});
  }
  decodificarMail(token: any) {
    let dato = { "token": token };
    return this.http.post(`${environment.API_URI_CORREOS}/decodificarMail`, dato, {headers: headers});
  }
}

