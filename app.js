const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

/*ROUTES
const listGames = require("./routes/listGames");
const games = require("./routes/Games");
const deleteGame = require("./routes/delete");
const addCart = require("./routes/addCart");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(listGames);
app.use(games);
app.use(deleteGame);
app.use(addCart);
*/
const anuncios = require("./routes/routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(anuncios);

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
