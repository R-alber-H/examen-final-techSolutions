export interface Usuario {
  email: string;
  password: string;
  rol:String;
}

export const Usuarios: Usuario[] = [
  {
    email: 'admin@techSolutions.com',
    password: '123456',
    rol:"Administrador"
  },
  {
    email: 'compras@techSolutions.com',
    password: '123456',
    rol:"Compras"
  },
  {
    email: 'ventas@techSolutions.com',
    password: '123456',
    rol:"Ventas"
  },
  {
    email: 'gerente@techSolutions.com',
    password: '123456',
    rol:"Gerente"
  },
  {
    email: 'contador@techSolutions.com',
    password: '123456',
    rol:"Contador"
  },
];