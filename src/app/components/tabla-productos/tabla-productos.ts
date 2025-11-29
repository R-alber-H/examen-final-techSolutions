
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

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productos$ = this.productosService.getProductos();
  }
}
