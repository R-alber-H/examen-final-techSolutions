
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
  paginacion$!: Observable<any>;
  
  constructor(
    private productosService: ProductosService,
    public carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.productos$ = this.productosService.getProductos();
    this.paginacion$ = this.productosService.getPaginacion();
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

  cambiarPagina(page: number): void {
    this.productosService.cargarProductos(page);
    // scroll suave al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  paginaAnterior(currentPage: number): void {
    if (currentPage > 0) {
      this.cambiarPagina(currentPage - 1);
    }
  }

  paginaSiguiente(currentPage: number, totalPages: number): void {
    if (currentPage < totalPages - 1) {
      this.cambiarPagina(currentPage + 1);
    }
  }

  obtenerPaginas(currentPage: number, totalPages: number): number[] {
    const paginas: number[] = [];
    const maxPaginas = 5; 
    let inicio = Math.max(0, currentPage - Math.floor(maxPaginas / 2));
    let fin = Math.min(totalPages, inicio + maxPaginas);
    
    if (fin - inicio < maxPaginas) {
      inicio = Math.max(0, fin - maxPaginas);
    }
    
    for (let i = inicio; i < fin; i++) {
      paginas.push(i);
    }
    
    return paginas;
  }

}



