const express = require("express");
const path = require("path");
const anuncioController = require("../controllers/anuncio");

const route = express.Router();

route.get("/anuncios", anuncioController.getAnuncios); 

module.exports = route;