import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {

   private apiUrl = 'http://melaproyectos.com:8084/api/metodos_pago';

   constructor(private http: HttpClient) { }

   getMetodoPago(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
          tap(data => console.log('Metodos obtenidos:', data))
        );
  }
  
}
