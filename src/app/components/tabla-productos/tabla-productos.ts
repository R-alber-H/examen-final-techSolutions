
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/producto/productos';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-productos.html',
  styleUrl: './tabla-productos.css',
})
export class TablaProductos implements OnInit {

  productos$!: Observable<Producto[]>;
  paginacion$!: Observable<any>;  

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productos$ = this.productosService.getProductos();
    this.paginacion$ = this.productosService.getPaginacion(); 
  }

  cambiarPagina(page: number): void {
    this.productosService.cargarProductos(page);
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