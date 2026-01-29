const express = require("express");

const route = express.Router();

const anuncioController = require("../controllers/anuncios");

route.get("/", anuncioController.getHome);
route.get("/anuncios", anuncioController.getAnuncios);
route.get("/anuncios/:id", anuncioController.getAnuncioDetalle);
route.get("/anuncios/:id/editar", anuncioController.getEditarAnuncio);
route.post("/anuncios/:id/editar", anuncioController.postEditarAnuncio);

route.post("/anuncios/:id/cambiar-estado", anuncioController.postCambiarEstado);


module.exports = route;