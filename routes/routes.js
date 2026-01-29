const express = require("express");

const route = express.Router();

const anuncioController = require("../controllers/anuncios");

route.get("/", anuncioController.getHome);
route.get("/anuncios", anuncioController.getAnuncios);

module.exports = route;