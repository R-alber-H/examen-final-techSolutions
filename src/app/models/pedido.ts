import { DetallePedido } from "./detalle-pedido";
import { ClientePedido } from "./cliente";
import { MetodoPago } from "./metodo-pago";

export interface PedidoCreate {
    idCliente: number;
    idMetodoPago: number;
    detallePedido :DetallePedido[];
}

export interface PedidoResponse {
  id: number;
  cliente: ClientePedido;
  metodoPago: MetodoPago;
  detallePedido: DetallePedido[];
  fecha_creacion: string;
}