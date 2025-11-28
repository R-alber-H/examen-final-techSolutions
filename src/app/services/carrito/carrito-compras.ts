import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../../datos/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosCarrito = new BehaviorSubject<Producto[]>([]);
  public carrito$ = this.productosCarrito.asObservable();

  constructor() {
    this.cargarCarritoLocalStorage();
  }

  obtenerCarrito(): Observable<Producto[]> {
    return this.carrito$;
  }

  // obtener productos del carrito
  obtenerCarritoArray(): Producto[] {
    return this.productosCarrito.value;
  }

  // agregar producto al carrito
  agregarProducto(producto: Producto): boolean {
    const carritoActual = this.productosCarrito.value;
    
    const existeProducto = carritoActual.find(p => p.id === producto.id);
    
    if (existeProducto) {
      return false;
    }
    
    const nuevoCarrito = [...carritoActual, producto];
    this.productosCarrito.next(nuevoCarrito);
    this.guardarCarritoLocalStorage();
    return true;
  }

  // eliminar producto del carrito
  eliminarProducto(productoId: number): void {
    const carritoActual = this.productosCarrito.value;
    const nuevoCarrito = carritoActual.filter(p => p.id !== productoId);
    this.productosCarrito.next(nuevoCarrito);
    this.guardarCarritoLocalStorage();
  }

  // verificar si un producto está en el carrito
  estaEnCarrito(productoId: number): boolean {
    const carritoActual = this.productosCarrito.value;
    return carritoActual.some(p => p.id === productoId);
  }

  calcularTotal(): number {
    const carritoActual = this.productosCarrito.value;
    return carritoActual.reduce((total, producto) => total + producto.precioVenta, 0);
  }

  obtenerCantidadProductos(): number {
    return this.productosCarrito.value.length;
  }

  vaciarCarrito(): void {
    this.productosCarrito.next([]);
    this.guardarCarritoLocalStorage();
  }

  private guardarCarritoLocalStorage(): void {
    const carritoActual = this.productosCarrito.value;
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
  }

  private cargarCarritoLocalStorage(): void {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      try {
        const carrito = JSON.parse(carritoGuardado);
        this.productosCarrito.next(carrito);
      } catch (error) {
        console.error('Error al cargar carrito desde localStorage', error);
        this.productosCarrito.next([]);
      }
    }
  }
}