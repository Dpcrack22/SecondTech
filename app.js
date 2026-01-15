const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const gamesRoute = require("./routes/games");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:false}));

app.use(gamesRoute);
app.use((req,res,next) => {
    res.status(404).send("<h1>404 - Página no encontrada</h1>");
});

app.listen(3000);