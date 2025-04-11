# arquitectura3capas

Capa de Presentación:
  - `app.js` y `routes/productRoutes.js`
  - Se encarga de recibir las peticiones del cliente (HTTP) y redirigirlas al controlador.

- Capa de Lógica de Negocio:
  - `controllers/productController.js`
  - Se encarga de validar datos, aplicar lógica y delegar tareas a la capa de datos.

- Capa de Datos:
  - `models/productModel.js`
  - Gestiona el almacenamiento en memoria (lista de productos) y operaciones sobre esos datos.

## Ventajas respecto a la versión monolítica

- Mejor organización del código: cada archivo tiene una responsabilidad clara.
- Más fácil de mantener, se pueden modificar o extender capas sin afectar otras.
- Facilita el testing: se puede probar cada capa de forma individual.

