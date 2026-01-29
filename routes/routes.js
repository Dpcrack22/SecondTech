const express = require("express");

const route = express.Router();

const anuncioController = require("../controllers/anuncios");

route.get("/", anuncioController.getHome);
route.get("/anuncios", anuncioController.getAnuncios);
route.get("/anuncios/nuevo", anuncioController.getNuevoAnuncio);
route.post("/anuncios/nuevo", anuncioController.postNuevoAnuncio);

module.exports = route;