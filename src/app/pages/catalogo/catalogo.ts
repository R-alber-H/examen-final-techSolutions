import { Component } from '@angular/core';
import { productos } from '../../datos/productos';
@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  productos = productos;

}
