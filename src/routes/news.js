const express = require("express");
const route = express.Router();
const newController = require("../app/controllers/newsController");

route.use("/:slug", newController.detail);
route.use("/", newController.index);

module.exports = route;
