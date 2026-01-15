const express = require("express");

const route = express.Router();

const newsController = require("../controllers/news");
route.get("/", newsController.getNewsList);
/* route.get("/news/add-news", newsController.getAddNews);
route.get("/news/:id", newsController.getNewsDetails);
route.post("/news/add-news", newsController.postAddNews);
route.post("/news/delete-news/:id", newsController.postDeleteNews);
route.post("/news/cart-news/:id", newsController.addCartNews);
route.post("/games/cart-game", gameController.viewCartGame); */

module.exports = route;