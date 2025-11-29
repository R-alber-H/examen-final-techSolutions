export interface ClienteCreate {
  nombre: string;
  dni: string;
  celular: string;
}

export interface ClienteResponse {
  id: number;
  nombre: string;
  dni: string;
  celular: string;
  fecha_creacion: string;
}

export interface ClientePedido{
  id: number;
  nombre: string;
  dni: string;
  celular: string;
  fecha_creacion: string;
}