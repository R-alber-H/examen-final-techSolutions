
import { Component, ViewChild } from '@angular/core';
import { TablaProductos } from "../../components/tabla-productos/tabla-productos";
import { RegistroProducto } from "../../components/registro-producto/registro-producto";

@Component({
  selector: 'app-productos',
  imports: [TablaProductos, RegistroProducto],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  @ViewChild(RegistroProducto) modalProducto!: RegistroProducto;

  abrirModal() {
    this.modalProducto.openModal();
  }
}
