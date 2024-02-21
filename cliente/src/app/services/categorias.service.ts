import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { InjectSetupWrapper } from '@angular/core/testing';
import { headers } from '../models/Header';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) {
    /*list(){
      return this.http.get(`${environment.API_URI}/categorias/`);
    }*/
   }
}
