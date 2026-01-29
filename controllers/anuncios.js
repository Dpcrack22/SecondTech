const Anuncio = require("../models/anuncios");

exports.getHome = (req, res, next) => {
    res.render("home", {title: "Second Tech"});
};

exports.getAnunciosList = (req, res, next) => {
    Anuncio.getAll((anuncios) => {
        res.render("anuncios-list", {title: "Second Tech", anuncios: anuncios});
    });
};