import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://melaproyectos.com:8084/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
          tap(data => console.log('Clientes obtenidos:', data))
        );
  }

  crearProducto(producto: any): Observable<any> {
    return this.http.post(this.apiUrl, producto).pipe(
      tap(data => console.log('Producto creado:', data))
    );
  }
}
