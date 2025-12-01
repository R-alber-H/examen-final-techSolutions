
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://melaproyectos.com:8084/api/productos';
  
  private productosSubject = new BehaviorSubject<any[]>([]);
  public productos$ = this.productosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => console.log('Productos obtenidos:', data))
    ).subscribe(productos => {
      this.productosSubject.next(productos);
    });
  }

  getProductos(): Observable<any[]> {
    return this.productos$;
  }

 recargarProductos(): void {
  this.http.get<any[]>(this.apiUrl).subscribe(productos => {
    this.productosSubject.next(productos);
  });
}


  crearProducto(producto: any): Observable<any> {
  return this.http.post(this.apiUrl, producto).pipe(
    tap(productoCreado => {
      const productosActuales = this.productosSubject.value;
      this.productosSubject.next([...productosActuales, productoCreado]);
    })
  );
}

}