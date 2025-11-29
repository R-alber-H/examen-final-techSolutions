import { Observable } from "rxjs";
import { Producto } from "./producto";

export interface ICarritoService {
    
  obtenerCarrito(): Observable<Producto[]>;

  obtenerCarritoArray(): Producto[];

  agregarProducto(producto: Producto): boolean;

  eliminarProducto(idProducto: number): void;

  estaEnCarrito(idProducto: number): boolean;

  calcularTotal(): number;

  obtenerCantidadProductos(): number;

  vaciarCarrito(): void;
}
