import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstrategiaPrecio } from '../../models/estrategia-precio';

@Injectable({
  providedIn: 'root'
})
export class EstrategiaService {

  private apiUrl ='http://melaproyectos.com:8084/api/config-precios';

  constructor(private http: HttpClient) { }

  actualizarEstrategia(data: EstrategiaPrecio): Observable<any> {
    return this.http.put<any>(this.apiUrl, data);
  }
}
