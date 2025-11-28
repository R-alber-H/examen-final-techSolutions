import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito/carrito-compras';
import { Observable } from 'rxjs';
import { ProductosService } from '../../services/producto/productos';
import { SweetAlertService } from '../../sweetalert/sweetalert-servicio';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

  productos$!: Observable<any[]>;
  
    constructor(private productosService: ProductosService,public carritoService: CarritoService) {}
  
    ngOnInit(): void {
      this.productos$ = this.productosService.getProductos();
    }

   agregarAlCarrito(producto: any): void {
    const agregado = this.carritoService.agregarProducto(producto);
    
    if (agregado) {
      SweetAlertService.exito("Producto agregado al carrito de compras");
    } else {
      alert('Este producto ya está en el carrito');
    }
  }

  estaEnCarrito(productoId: number): boolean {
    return this.carritoService.estaEnCarrito(productoId);
  }
}


