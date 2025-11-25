import { Component } from '@angular/core';
import { TablaVentas } from "../../components/tabla-ventas/tabla-ventas";

@Component({
  selector: 'app-ventas',
  imports: [TablaVentas],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {

}
