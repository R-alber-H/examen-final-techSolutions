import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClienteCreate,ClienteResponse } from '../../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://melaproyectos.com:8084/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ClienteResponse> {
  return this.http.get<ClienteResponse>(this.apiUrl).pipe(
    tap(data => console.log('Clientes obtenidos:', data))
  );
}

crearCliente(cliente: ClienteCreate): Observable<ClienteResponse> {
  return this.http.post<ClienteResponse>(this.apiUrl, cliente).pipe(
    tap(data => console.log('cliente creado:', data))
  );
}

}