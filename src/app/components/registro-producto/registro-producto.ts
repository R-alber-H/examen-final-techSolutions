import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductosService } from '../../services/producto/productos'; 

@Component({
  selector: 'app-registro-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-producto.html',
  styleUrls: ['./registro-producto.css']
})
export class RegistroProducto implements OnInit {

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;
  
  productoForm!: FormGroup;
  private modalInstance: any;
  cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService 
  ) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precioVenta: [0, [Validators.required, Validators.min(0)]],
      precioCompra: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      imagenUrl: [''],
      stockMinimo: [12]
    });
  }

  openModal() {
    this.modalInstance = new (window as any).bootstrap.Modal(this.modalElement.nativeElement);
    this.modalInstance.show();
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  onSubmit() {
    if (this.productoForm.valid) {
      this.cargando = true;
       
      this.productosService.crearProducto(this.productoForm.value).subscribe({
        next: (response) => {
          alert('Producto registrado correctamente');
          this.closeModal();
          this.productoForm.reset();
          this.cargando = false;
        },
      });
    } else {
      alert('Por favor completa todos los campos requeridos');
    }
  }
}