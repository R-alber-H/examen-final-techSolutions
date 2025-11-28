import { Component , OnInit} from '@angular/core';
import { metodosPago } from '../../datos/metosoPago';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MetodoPagoService } from '../../services/metodoPago/metodo-pago-service';

@Component({
  selector: 'app-tabla-pagos',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-pagos.html',
  styleUrl: './tabla-pagos.css',
})
export class TablaPagos implements OnInit {

  metodoPago = metodosPago;

  metodosPago$!: Observable<any[]>;

  constructor(private metodoPagoService: MetodoPagoService) {}

  ngOnInit(): void {
    this.metodosPago$ = this.metodoPagoService.getMetodoPago();
  }
  
  
}
