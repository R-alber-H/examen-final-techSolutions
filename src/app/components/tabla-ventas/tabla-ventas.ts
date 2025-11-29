import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PedidoService } from '../../services/pedidos/pedido-service';
import { PedidoResponse } from '../../models/pedido';

@Component({
  selector: 'app-tabla-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-ventas.html',
  styleUrl: './tabla-ventas.css',
})
export class TablaVentas implements OnInit  {
//  ventas = ventas;
 pedidos$!: Observable<PedidoResponse[]>;
 pedidoSeleccionado!: PedidoResponse;

  constructor(private pedidosService: PedidoService) {}

  ngOnInit(): void {
    this.pedidos$ = this.pedidosService.getPedidos();
  }

   verProductos(pedido: PedidoResponse): void {
    this.pedidoSeleccionado = pedido;
    const modal = new (window as any).bootstrap.Modal(document.getElementById('modalProductos'));
    modal.show();
  }

  calcularTotalPedido(pedido: PedidoResponse): number {
  if (!pedido?.detallePedido) return 0;
  return pedido.detallePedido.reduce((total: number, detalle: any) => 
    total + detalle.subTotal, 0
  );
}
}
