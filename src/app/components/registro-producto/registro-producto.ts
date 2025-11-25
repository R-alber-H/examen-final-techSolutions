
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.html',
  styleUrls: ['./registro-producto.css']
})
export class RegistroProducto {

  @ViewChild('modal', { static: true }) modalElement!: ElementRef;

  openModal() {
    const modal = new (window as any).bootstrap.Modal(this.modalElement.nativeElement);
    modal.show();
  }
}
