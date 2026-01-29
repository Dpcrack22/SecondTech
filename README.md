# SecondTech

Plataforma de compraventa de tecnología de segunda mano desarrollada con Node.js y Express.

## Descripción
SecondTech es una aplicación web que permite publicar, consultar y gestionar anuncios de productos tecnológicos como móviles, consolas, ordenadores o componentes. Inspirada en plataformas como Wallapop, pero sin usuarios ni autenticación.

## Instalación
1. Clona el repositorio o descarga el proyecto.
2. Instala las dependencias:
   ```
   npm install
   ```
3. Inicia el servidor:
   ```
   npm start
   ```
4. Accede a la web en [http://localhost:3000](http://localhost:3000)

## Estructura del proyecto
- `app.js` — Archivo principal de la aplicación
- `routes/` — Definición de rutas
- `controllers/` — Lógica de negocio
- `models/` — Acceso a datos y lógica de anuncios
- `views/` — Vistas EJS
- `public/` — Archivos estáticos (CSS, imágenes)
- `data/` — Persistencia de anuncios en JSON

## Rutas principales
- `/` — Página principal
- `/anuncios` — Listado de anuncios (con filtros)
- `/anuncios/nuevo` — Crear nuevo anuncio
- `/anuncios/:id` — Detalle de un anuncio
- `/anuncios/:id/editar` — Editar anuncio
- `/anuncios/:id/cambiar-estado` — Cambiar estado del anuncio

## Funcionalidades
- Listar, crear, editar y ver anuncios
- Filtros por categoría y estado
- Persistencia en fichero JSON
- Página de error 404 personalizada

## Requisitos técnicos
- Node.js + Express
- EJS para vistas
- Sin base de datos ni autenticación

## Autores
- [Tu nombre]
- [Nombre de tu compañero]

---

Proyecto para el módulo DUAL AWS2 — Ciclo Formativo de Grado Superior en Informática
