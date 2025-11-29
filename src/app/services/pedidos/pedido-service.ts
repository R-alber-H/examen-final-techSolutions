import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { PedidoCreate,PedidoResponse } from '../../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
   private apiUrl = 'http://melaproyectos.com:8084/api/pedidos';

   constructor(private http: HttpClient) { }

   getPedidos(): Observable<PedidoResponse[]> {
    return this.http.get<PedidoResponse[]>(this.apiUrl).pipe(
          tap(data => console.log('Pedidos obtenidos:', data))
        );
  }

  crearPedido(pedido:any) :Observable<any>{
    return this.http.post(this.apiUrl,pedido).pipe(
      tap(data => console.log('Producto creado:', data)));
  }
}
