const fs = require("fs");
const path = require("path");
const anunciosFilePath = path.join(__dirname, "..", "data", "anuncios.json");

class Anuncio {
    constructor(titulo, descripcion, precio, contacto) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.contacto = contacto;
    }

    save() {
        fs.readFile(anunciosFilePath, (err, data) => {
            let anuncios = [];
            if (!err) {
                anuncios = JSON.parse(data);
            }
            anuncios.push(this);
            fs.writeFile(anunciosFilePath, JSON.stringify(anuncios), (err) => {
                if (err) {
                    console.error("Error saving anuncio:", err);
                }
            });
        });
    }

    static getAll(callback) {
        fs.readFile(anunciosFilePath, (err, data) => {
            let anuncios = [];
            if (!err) {
                anuncios = JSON.parse(data);
            }

            return callback(anuncios);
        })
    }

    static getById(id, callback) {
        fs.readFile(anunciosFilePath, (err, data) => {
            let anuncios = [];
            if (!err) {
                anuncios = JSON.parse(data);
            }
            const anuncio = anuncios.find(a => String(a.id) === String(id));
            return callback(anuncio);
        });
    }

    static deleteById(id) {
        fs.readFile(anunciosFilePath, (err, data) => {
            let anuncios = [];
            if (!err) {
                anuncios = JSON.parse(data);
            }
            const index = anuncios.findIndex(a => String(a.id) === String(id));
            if (index !== -1) {
                anuncios.splice(index, 1);
                fs.writeFile(anunciosFilePath, JSON.stringify(anuncios), (err) => {
                    if (err) {
                        console.error("Error deleting anuncio:", err);
                    }
                });
            }
        });
    }
}

module.exports = Anuncio;
