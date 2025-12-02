📘 TechSolutions – Plataforma de Gestión Empresarial

Aplicación web desarrollada en Angular para la gestión integral de ventas, inventario, pagos, reportes financieros y catálogo de productos, orientada a pymes del Perú y Latinoamérica.

📌 Descripción general

TechSolutions S.A. busca ofrecer una plataforma unificada que permita a pymes controlar sus procesos críticos: ventas, inventario, reportes financieros y políticas de precios.
La aplicación implementa integración con múltiples pasarelas de pago, gestión segura de información sensible y mecanismos de automatización para mejorar la eficiencia operativa.

Esta plataforma está diseñada para ser escalable, segura, modular y fácil de usar, basada en patrones de diseño (Adapter, Proxy, Observer, Command, Memento, Strategy, Iterator) que fortalecen su arquitectura.

🎯 Objetivos del Proyecto

Integrar los procesos clave de ventas, inventario y reportes financieros en un solo sistema.

Automatizar pedidos para reducir errores operativos.

Centralizar y controlar el inventario con alertas inteligentes.

Proteger el acceso a reportes sensibles mediante control de roles.

Implementar estrategias dinámicas de precios.

Integrar múltiples pasarelas de pago.

Proporcionar mecanismos de reversión y recuperación de acciones críticas.

🧩 Requerimientos Funcionales
🔌 Procesamiento de Pagos – Adapter

RF1: Integración de PayPal, Yape y Plin mediante un adaptador común.

RF2: El administrador puede activar o desactivar pasarelas desde panel de configuración.

🔐 Control de Accesos a Reportes – Proxy

RF3: Acceso protegido mediante proxy que valida roles y credenciales.

RF4: Solo Gerente o Contador pueden ver reportes completos.

📦 Gestión de Inventario – Observer

RF5: Notificaciones automáticas a Gerente y Compras cuando el stock es menor al mínimo.

RF6: El stock mínimo es configurable por producto.

🧾 Procesamiento de Pedidos – Command + Memento

RF7: Las acciones del pedido (crear, procesar, aplicar descuento, cancelar) se encapsulan como comandos registrados en un historial.

RF8: Posibilidad de revertir un pedido a un estado previo mediante mementos.

💲 Políticas de Precios – Strategy

RF9: Soporte para:

Precio estándar

Precio con descuento porcentual

Precio dinámico (demanda/temporada)

RF10: El administrador puede cambiar la estrategia desde el panel de configuración.

🛒 Catálogo de Productos – Iterator

RF11: Recorrido del catálogo con iterador, con paginación y filtros.

RF12: Interfaz ordenada y eficiente sin exponer la estructura interna.

🚀 Tecnologías Principales
Tecnología	Uso
Angular	Frontend SPA
RxJS	Observables, patrones reactivos
TypeScript	Tipado fuerte

🛠️ Instalación y ejecución
Requisitos previos

Node.js 18+

Angular CLI 17+

npm 9+

Instalación
npm install

Ejecutar en desarrollo
ng serve -o


🎯 Beneficios esperados

Escalabilidad: Nuevas pasarelas se integran fácilmente.

Seguridad: Roles y proxies protegen datos sensibles.

Automatización: Alertas de stock y flujo de pedidos robusto.

Flexibilidad: Estrategias de precios configurables.

Usabilidad: Catálogo fluido incluso con muchos productos.

Confiabilidad: Registro de acciones y capacidad de deshacer errores.
