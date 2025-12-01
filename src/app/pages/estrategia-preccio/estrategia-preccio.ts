import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EstrategiaPrecio } from '../../models/estrategia-precio';
import { EstrategiaService } from '../../services/estrategiaPrecio/estrategia-service';
import { ProductosService } from '../../services/producto/productos';

@Component({
  selector: 'app-estrategia-preccio',
  imports: [ReactiveFormsModule],
  templateUrl: './estrategia-preccio.html',
  styleUrls: ['./estrategia-preccio.css'],
})
export class EstrategiaPreccio {

  estrategiaForm: FormGroup;

  constructor(private fb: FormBuilder, private estrategiaService: EstrategiaService, private productosService: ProductosService) {
    this.estrategiaForm = this.fb.group({
      estrategiaPrecio: ['ESTANDAR', Validators.required],
      porcentajeDescuentoGlobal: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      factorDinamicoGlobal: [1, [Validators.required, Validators.min(1)]]
    });
  }

  guardarEstrategia() {
    if (this.estrategiaForm.valid) {
      const data: EstrategiaPrecio = this.estrategiaForm.value;

      this.estrategiaService.actualizarEstrategia(data).subscribe(() => {
        this.productosService.recargarProductos();
        this.resetFormulario();
      });
    }
  }

  resetFormulario() {
    this.estrategiaForm.reset({
      estrategiaPrecio: 'ESTANDAR',
      porcentajeDescuentoGlobal: 0,
      factorDinamicoGlobal: 1
    });
  }
}
