export function validarLogin(email: string, password: string): string {
  if (!email || !password) {
    return 'Por favor, completa todos los campos.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'El formato del email no es valido.';
  }

  return ''; 
}
