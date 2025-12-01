
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito/carrito-compras';
import { Producto } from '../../models/producto';
import { ClienteService } from '../../services/cliente/cliente-service';
import { MetodoPagoService } from '../../services/metodoPago/metodo-pago-service';
import { PedidoService } from '../../services/pedidos/pedido-service';
import { Observable } from 'rxjs';
import { SweetAlertService } from '../../sweetalert/sweetalert-servicio';

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

  constructor(
    private carritoService: CarritoService,
    private clienteService: ClienteService,
    private metodoPagoService: MetodoPagoService,
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    // ssuscribirse al carrito para obtener actualizaciones en tiempo real
    this.carritoService.carrito$.subscribe(productos => {
      this.productosCarrito = productos;
      this.total = this.carritoService.calcularTotal();
    });

    this.metodoPago$ = this.metodoPagoService.getMetodoPago();
  }

  eliminarProducto(productoId: number): void {
    if (confirm('¿Estás seguro de eliminar este producto del carrito?')) {
      this.carritoService.eliminarProducto(productoId);
    }
  }

  comprar(): void {

    if (this.productosCarrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    if (!this.cliente.nombre || !this.cliente.dni || !this.cliente.celular) {
      // alert('Por favor complete todos los datos del cliente');
      SweetAlertService.error('Por favor complete todos los datos del cliente')
      return;
    }

    if (this.idMetodoPago === null) {
      SweetAlertService.error('Por favor seleccione un método de pago')
      // alert('Por favor seleccione un método de pago');
      return;
    }

    this.clienteService.crearCliente(this.cliente).subscribe(clienteCreado => {
      console.log("cliente creado:", clienteCreado);

      const detalle = this.productosCarrito.map(producto => ({
        idProducto: producto.id,
        cantidad: 1,
        subTotal: producto.precioVenta
      }));

      const pedido = {
        idCliente: clienteCreado.id,
        idMetodoPago: this.idMetodoPago!,
        detallePedido: detalle
      };

      this.pedidoService.crearPedido(pedido).subscribe(pedidoCreado => {
        // console.log("Pedido creado:", pedidoCreado);
        // alert(`¡Compra realizada con éxito!\nTotal: $${this.total.toFixed(2)}`);
        SweetAlertService.exito('¡Compra realizada con éxito!')
        this.limpiarFormulario();
      });
    });
  }

  limpiarFormulario(): void {
    this.carritoService.vaciarCarrito();
    this.cliente = { nombre: '', dni: '', celular: '' };
    this.idMetodoPago = null;
  }
}
