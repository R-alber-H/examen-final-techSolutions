import { Component } from '@angular/core';
import { metodosPago } from '../../datos/metosoPago';

@Component({
  selector: 'app-tabla-pagos',
  imports: [],
  templateUrl: './tabla-pagos.html',
  styleUrl: './tabla-pagos.css',
})
export class TablaPagos {
  metodoPago = metodosPago;
}
