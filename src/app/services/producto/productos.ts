
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { PageableResponse } from '../../models/pageableResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'http://melaproyectos.com:8084/api/productos';
  
  private productosSubject = new BehaviorSubject<any[]>([]);
  public productos$ = this.productosSubject.asObservable();

  private paginacionSubject = new BehaviorSubject<any>({
    totalPages: 0,
    totalElements: 0,
    currentPage: 0,
    pageSize: 8
  });
  public paginacion$ = this.paginacionSubject.asObservable();

  constructor(private http: HttpClient) {
    this.cargarProductos(0, 8);
  }

  cargarProductos(page: number = 0, size: number = 8): void {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    this.http.get<PageableResponse>(this.apiUrl, { params }).pipe(
      tap(data => console.log('Productos obtenidos:', data))
    ).subscribe(response => {
      this.productosSubject.next(response.content);
      this.paginacionSubject.next({
        totalPages: response.totalPages,
        totalElements: response.totalElements,
        currentPage: response.number,
        pageSize: response.size
      });
    });
  }

  getProductos(): Observable<any[]> {
    return this.productos$;
  }

  getPaginacion(): Observable<any> {
    return this.paginacion$;
  }

  crearProducto(producto: any): Observable<any> {
    return this.http.post(this.apiUrl, producto).pipe(
      tap(productoCreado => {
        console.log('Producto creado:', productoCreado);
        this.cargarProductos(0);
      })
    );
  }

  recargarProductos(): void {
    const paginacionActual = this.paginacionSubject.value;
    this.cargarProductos(paginacionActual.currentPage, paginacionActual.pageSize);
  }

}
