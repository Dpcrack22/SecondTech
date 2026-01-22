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

// GET /anuncios
exports.getAnuncios = (req, res) => {
	const { categoria, estado } = req.query;
	Anuncio.getAll((anuncios) => {
		let filtrados = anuncios;
		if (categoria) {
			filtrados = filtrados.filter(a => a.Categoria && a.Categoria.toLowerCase() === categoria.toLowerCase());
		}
		if (estado) {
			filtrados = filtrados.filter(a => a.Estado && a.Estado.toLowerCase() === estado.toLowerCase());
		}
		const resultado = filtrados.map(a => ({
			Titulo: a.Titulo,
			Categoria: a.Categoria,
			Precio: a.Precio,
			Estado: a.Estado
		}));
		res.render("anuncios/lista", {
			anuncios: resultado,
			categoria: categoria || '',
			estado: estado || ''
		});
	});
};