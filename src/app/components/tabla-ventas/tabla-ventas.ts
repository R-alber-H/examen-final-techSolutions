import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
// import { ventas } from '../../datos/ventas';
import { PedidoService } from '../../services/pedidos/pedido-service';

@Component({
  selector: 'app-tabla-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-ventas.html',
  styleUrl: './tabla-ventas.css',
})
export class TablaVentas implements OnInit  {
//  ventas = ventas;
 pedidos$!: Observable<any[]>;

  constructor(private pedidosService: PedidoService) {}

  ngOnInit(): void {
    this.pedidos$ = this.pedidosService.getPedidos();
  }
}
