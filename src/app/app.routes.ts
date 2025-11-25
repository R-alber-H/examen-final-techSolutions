import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './layout/layout/layout';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { CarritoCompras } from './pages/carrito-compras/carrito-compras';
import { PublicLayout } from './layout/public-layout/public-layout';
import { Productos } from './pages/productos/productos';
import { Ventas } from './pages/ventas/ventas';
import { ReportePagos } from './pages/reporte-pagos/reporte-pagos';
import { MetodosPagos } from './pages/metodos-pagos/metodos-pagos';

export const routes: Routes = [

  { path: 'login', component: Login, pathMatch: 'full' },
 
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'catalogo', component: Catalogo },
      { path: 'carrito-compras', component: CarritoCompras },
    ]
  },

  {path: 'admin', component: Layout,
    children: [
      { path: 'ventas', component: Ventas },
      { path: 'reporte', component: ReportePagos },
      { path: 'productos', component:Productos },
      { path: 'metodo_pago', component:MetodosPagos },
    ],
  },

  { path: '**', redirectTo: '' },
];
