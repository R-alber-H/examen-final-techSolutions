import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito/carrito-compras';
import { Producto } from '../../datos/productos';

// interface Producto {
//   id: number;
//   nombre: string;
//   precio: number;
//   imagen: string;
// }

@Component({
  selector: 'app-carrito-compras',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito-compras.html',
  styleUrl: './carrito-compras.css',
})
export class CarritoCompras implements OnInit {
  productosCarrito: Producto[] = [];
  total: number = 0;
  metodoPago: string = '';

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Suscribirse al carrito para obtener actualizaciones en tiempo real
    this.carritoService.carrito$.subscribe(productos => {
      this.productosCarrito = productos;
      this.total = this.carritoService.calcularTotal();
      console.log("productos ccarrito",this.productosCarrito)
    });
    console.log("productos ccarrito",this.productosCarrito)
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

    if (!this.metodoPago) {
      alert('Por favor seleccione un método de pago');
      return;
    }

    alert(`Compra realizada por $${this.total.toFixed(2)} mediante ${this.metodoPago}`);
    this.carritoService.vaciarCarrito();
    this.metodoPago = '';
  }
}
