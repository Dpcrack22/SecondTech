const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,"..","data","anuncios.json");



class Videogame {
    constructor(id, title, developer, genre, release_year, description, image){
        this.id = id;
        this.title = title;
        this.developer = developer;
        this.genre = genre;
        this.release_year = release_year;
        this.description = description;
        this.image = image;
    }
    
    save() {
        fs.readFile(filePath,(err,data)=>{
            let games = [];
            if(!err){
                games = JSON.parse(data);
            }
            games.push(this);
            
            fs.writeFile(filePath, JSON.stringify(games), (err)=>{
                console.log(err);
            })
            
        })
    }

    static getAll(cb){
         fs.readFile(filePath,(err,data)=>{
            let games = [];
            if(!err){
                games = JSON.parse(data);
            }
            return cb(games);
        });

    }

    static getLastId(cb){
        fs.readFile(filePath,(err,data)=>{
            let games = [];
            if(!err){
                games = JSON.parse(data);
            }
            return cb(games[games.length - 1].id);
        });
    }

    static getGameById(id,cb){
        fs.readFile(filePath,(err,data)=>{
            let games = [];
            if(!err){
                games = JSON.parse(data);
            }
            return cb(games.find((g) => g.id === id));
        });
    }

}


module.exports = Videogame;