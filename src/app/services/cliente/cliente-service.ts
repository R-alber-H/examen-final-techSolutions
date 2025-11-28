import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://melaproyectos.com:8084/api/clientes';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap(data => console.log('Clientes obtenidos:', data))
    );
  }
}