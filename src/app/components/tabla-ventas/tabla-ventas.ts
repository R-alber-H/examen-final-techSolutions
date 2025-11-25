import { Component } from '@angular/core';
import { ventas } from '../../datos/ventas';

@Component({
  selector: 'app-tabla-ventas',
  imports: [],
  templateUrl: './tabla-ventas.html',
  styleUrl: './tabla-ventas.css',
})
export class TablaVentas {
 ventas = ventas;
}
