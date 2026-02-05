// POST /anuncios/:id/cambiar-estado
exports.postCambiarEstado = (req, res, next) => {
	const id = req.params.id;
	const nuevoEstado = req.body.estado;
	Anuncio.getAll((anuncios) => {
		const idx = anuncios.findIndex(a => String(a.id) === String(id));
		if (idx === -1) {
			return res.status(404).send('Anuncio no encontrado');
		}
		anuncios[idx].Estado = nuevoEstado;
		const fs = require('fs');
		const path = require('path');
		const anunciosFilePath = path.join(__dirname, "..", "data", "anuncios.json");
		fs.writeFile(anunciosFilePath, JSON.stringify(anuncios), (err) => {
			if (err) {
				return res.status(500).send('Error guardando estado');
			}
			res.redirect('/anuncios/' + id);
		});
	});
};
// GET /anuncios/:id/editar
exports.getEditarAnuncio = (req, res, next) => {
	const id = req.params.id;
	Anuncio.getById(id, (anuncio) => {
		if (!anuncio) {
			return res.status(404).send('Anuncio no encontrado');
		}
		res.render("anuncios/editar", {
			title: "Editar Anuncio",
			anuncio,
			id,
			error: null
		});
	});
};

// POST /anuncios/:id
exports.postEditarAnuncio = (req, res, next) => {
	const id = req.params.id;
	const { titulo, descripcion, precio, estado, imagen } = req.body;
	if (!titulo || !descripcion || !precio || !estado) {
		// Validación mínima
		return Anuncio.getById(id, (anuncio) => {
			res.render("anuncios/editar", {
				title: "Editar Anuncio",
				anuncio,
				id,
				error: "Todos los campos son obligatorios."
			});
		});
	}
	Anuncio.getAll((anuncios) => {
		const idx = anuncios.findIndex(a => String(a.id) === String(id));
		if (idx === -1) {
			return res.status(404).send('Anuncio no encontrado');
		}
		anuncios[idx].Titulo = titulo;
		anuncios[idx].Descripcion = descripcion;
		anuncios[idx].Precio = precio;
		anuncios[idx].Estado = estado;
		if (typeof imagen !== 'undefined' && imagen.trim()) {
			anuncios[idx].Imagen = imagen.trim();
		}
		const fs = require('fs');
		const path = require('path');
		const anunciosFilePath = path.join(__dirname, "..", "data", "anuncios.json");
		fs.writeFile(anunciosFilePath, JSON.stringify(anuncios), (err) => {
			if (err) {
				return res.status(500).send('Error guardando anuncio');
			}
			res.redirect('/anuncios/' + id);
		});
	});
};
// GET /anuncios/:id
exports.getAnuncioDetalle = (req, res, next) => {
	const id = req.params.id;
	Anuncio.getById(id, (anuncio) => {
		if (!anuncio) {
			return res.status(404).send('Anuncio no encontrado');
		}
		res.render("anuncios/detalle", {
			title: "Detalle del Anuncio",
			anuncio,
			id
		});
	});
};
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
		res.render("anuncios/lista", {
			title: "Listado de Anuncios",
			anuncios: filtrados,
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
	const { titulo, descripcion, precio, categoria, estado, contacto, imagen } = req.body;
	// Validación mínima de email
	const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
	if (!titulo || !descripcion || !precio || !categoria || !estado || !contacto || !emailRegex.test(contacto)) {
		return res.render("anuncios/nuevo", { title: "Nuevo Anuncio", error: "Todos los campos son obligatorios y el correo debe ser válido." });
	}
	const imgValue = imagen && imagen.trim() ? imagen.trim() : 'default.jpg';
	const anuncioNuevo = new Anuncio(
		titulo,
		descripcion,
		precio,
		categoria,
		estado,
		contacto,
		imgValue
	);
	anuncioNuevo.save();
	res.redirect("/anuncios");
};