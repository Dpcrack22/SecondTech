/* 4.2 Gestión de anuncios
4.2.1 Listado de anuncios
Ruta: GET /anuncios
Debe mostrarse un listado con la siguiente información de cada anuncio:
● Título
● Categoría
● Precio
● Estado (disponible, reservado o vendido)
El listado debe permitir al menos uno de los siguientes filtros:
● Filtrar por categoría (movil, consola, pc, componentes, otros)
● Filtrar por estado (disponible, reservado, vendido)
Los filtros se implementarán mediante query parameters.*/
const Anuncio = require("../models/anuncios");