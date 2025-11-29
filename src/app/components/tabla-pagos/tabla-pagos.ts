import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, startWith, map } from 'rxjs/operators';
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

  metodosPago$!: Observable<any[]>;
  private recargar$ = new Subject<void>();

  constructor(private metodoPagoService: MetodoPagoService) {}

  ngOnInit(): void {
    this.metodosPago$ = this.recargar$.pipe(
      startWith(null),
      switchMap(() => this.metodoPagoService.getMetodoPago()),
      map(metodos => metodos.sort((a: any, b: any) => a.id - b.id))
    );
  }
  
  cambiarEstado(metodoId: number): void {
  this.metodoPagoService.cambiarEstado(metodoId).subscribe({
    next: (response) => {
      console.log('Estado cambiado exitosamente:', response);
      this.recargar$.next();
    }
  });
}
}