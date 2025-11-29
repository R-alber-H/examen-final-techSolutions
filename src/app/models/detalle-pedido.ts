import { Producto } from "./producto";


export interface DetallePedidoCreate {
    idProducto : number;
    cantidad : number;
    subTotal: number;
}

export interface DetallePedido {
  producto: Producto;
  cantidad: number;
  subTotal: number;
}
