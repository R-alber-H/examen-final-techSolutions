import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito/carrito-compras';
import { Producto } from '../../models/producto';
import { ClienteService } from '../../services/cliente/cliente-service';
import { MetodoPagoService } from '../../services/metodoPago/metodo-pago-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-compras',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito-compras.html',
  styleUrl: './carrito-compras.css',
})
export class CarritoCompras implements OnInit {
  productosCarrito: Producto[] = [];
  total: number = 0;
  metodoPago$!: Observable<any[]>;
  idMetodoPago: number | null = null;

  cliente = {
    nombre: '',
    dni: '',
    celular: ''
  };

  constructor(private carritoService: CarritoService, clienteService: ClienteService, private metodoPagoService: MetodoPagoService) { }

  ngOnInit(): void {
    // ssuscribirse al carrito para obtener actualizaciones en tiempo real
    this.carritoService.carrito$.subscribe(productos => {
      this.productosCarrito = productos;
      this.total = this.carritoService.calcularTotal();
    });

    this.metodoPago$ = this.metodoPagoService.getMetodoPago();

    console.log("productos ccarrito", this.productosCarrito)
  }

  eliminarProducto(productoId: number): void {
    if (confirm('¿Estás seguro de eliminar este producto del carrito?')) {
      this.carritoService.eliminarProducto(productoId);
    }
  }

  comprar(): void {

    console.log("Cliente a enviar:", this.cliente);

    // this.clienteService.crearCliente(this.cliente);

    if (this.productosCarrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    if (this.idMetodoPago === null) {
      alert('Por favor seleccione un método de pago');
      return;
    }

    const detalle = this.productosCarrito.map(producto => ({
      idProducto: producto.id,
      cantidad: 1,
      subTotal: producto.precioVenta
    }));

    const pedidoSimulado = {
      idCliente: "se generar despues de crear al cliente",
      idMetodoPago: this.idMetodoPago,
      detallePedido: detalle
    };
    console.log("Pedido que se enviará:", pedidoSimulado);
    
    alert(`Compra realizada por $${this.total.toFixed(2)} mediante ${this.idMetodoPago}`);
    this.carritoService.vaciarCarrito();
    this.idMetodoPago = 0;
  }
}
