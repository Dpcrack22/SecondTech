const Anuncio = require("../models/anuncios");

exports.getHome = (req, res, next) => {
    res.render("home", {title: "Second Tech"});
};

exports.getAnunciosList = (req, res, next) => {
    Anuncio.getAll((anuncios) => {
        res.render("anuncios-list", {title: "Second Tech", anuncios: anuncios});
    });
};

// GET /anuncios
exports.getAnuncios = (req, res, next) => {
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
            title: "Listado de Anuncios",
			anuncios: resultado,
			categoria: categoria || '',
			estado: estado || ''
		});
	});
};

// GET /anuncios/nuevo
exports.getNuevoAnuncio = (req, res, next) => {
    res.render("anuncios/nuevo", {title: "Nuevo Anuncio"});
};

// POST /anuncios/nuevo
exports.postNuevoAnuncio = (req, res, next) => {
	const anuncioNuevo = new Anuncio(
		req.body.titulo,
		req.body.precio,
		req.body.categoria,
		req.body.estado
	);
   	anuncioNuevo.save();
    res.redirect("/anuncios");
};