export interface Producto {
  id: number;
  nombre: string;
  precioVenta: number; 
  precioCompra: number;
  stock: number;
  imagenUrl?: string;
  descripcion?: string;
}