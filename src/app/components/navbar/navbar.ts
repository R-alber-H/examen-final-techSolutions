import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarritoService } from '../../services/carrito/carrito-compras';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
   cantidadProductos$: Observable<number>;

   constructor(private carritoService: CarritoService) {
   
    this.cantidadProductos$ = this.carritoService.carrito$.pipe(
      map(productos => productos.length)
    );

}}
