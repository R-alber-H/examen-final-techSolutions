import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
   private apiUrl = 'http://melaproyectos.com:8084/api/pedidos';

   constructor(private http: HttpClient) { }

   getPedidos(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
          tap(data => console.log('Pedidos obtenidos:', data))
        );
  }
}
