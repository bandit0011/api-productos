API RESTful de Productos
Descripción

Esta es una API RESTful desarrollada en Node.js con Express y conectada a una base de datos MySQL.
Permite realizar operaciones CRUD sobre el recurso Productos:

Listar productos

Obtener un producto por ID

Crear un nuevo producto

Actualizar un producto existente

Eliminar un producto

Se han implementado validaciones básicas, persistencia de datos en MySQL y buenas prácticas de seguridad usando variables de entorno.

Tecnologías utilizadas

Node.js (vXX)

Express

MySQL / MySQL Workbench

mysql2 (driver de MySQL para Node.js)

dotenv (para manejo de variables de entorno)

Postman (para pruebas de endpoints)

Requisitos

Tener instalado Node.js y npm

Tener instalado MySQL Server y MySQL Workbench

Editor de código (VSCode usado en su creacion)

Instalación y configuración

Clonar el repositorio

git clone <https://github.com/bandit0011/api-productos.git>
cd api-productos


Instalar dependencias

npm install


Configurar variables de entorno
Crear un archivo .env en la raíz del proyecto con el siguiente contenido:

DB_HOST=localhost
DB_USER=api_user
DB_PASSWORD=password123
DB_NAME=tienda
DB_PORT=3306


Ajusta los valores según tu configuración de MySQL.

Crear la base de datos y tabla en MySQL
En MySQL Workbench, ejecutar:

CREATE DATABASE tienda;
USE tienda;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


Levantar el servidor

node index.js

El servidor se ejecutará en: http://localhost:3000

Endpoints
Método	Ruta	Descripción	Body (JSON)
GET	/productos	Listar todos los productos	-
GET	/productos/:id	Obtener un producto por ID	-
POST	/productos	Crear un nuevo producto	{ "nombre": "Producto", "descripcion": "...", "precio": 0, "stock": 0 }
PUT	/productos/:id	Actualizar un producto existente	{ "nombre": "Nuevo", "descripcion": "...", "precio": 0, "stock": 0 }
DELETE	/productos/:id	Eliminar un producto por ID	-
Pruebas

Se recomienda utilizar Postman para probar los endpoints.

Se puede importar la colección de pruebas con todos los endpoints configurados.

Verificar que las operaciones se reflejen correctamente en la tabla productos de MySQL Workbench.

Buenas prácticas implementadas

Variables de entorno para credenciales

Consultas parametrizadas para evitar inyección SQL

Validación básica de campos obligatorios

Manejo de errores y códigos HTTP apropiados

Exportación/backup de base de datos mediante Workbench

Capturas de ejemplo

Capturas de Postman mostrando las pruebas exitosas

Capturas de MySQL Workbench mostrando los registros en la tabla productos

Autor

Pablo Andres Correa Rojas
Proyecto de práctica de API RESTful con Node.js y MySQL