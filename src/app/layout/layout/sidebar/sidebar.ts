
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {

  rol: string = '';
  email:string ='';

  constructor(private router: Router) {}

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioActual');
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      this.rol = usuario.rol; 
      this.email = usuario.email;
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuarioActual');
    localStorage.removeItem('sesionActiva');
    this.router.navigate(['']);
  }
}

