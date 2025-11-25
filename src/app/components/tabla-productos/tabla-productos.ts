import { Component } from '@angular/core';
import { productos } from '../../datos/productos';

@Component({
  selector: 'app-tabla-productos',
  imports: [],
  templateUrl: './tabla-productos.html',
  styleUrl: './tabla-productos.css',
})
export class TablaProductos {
  productos = productos;

}
