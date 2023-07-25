const newsRouter = require("./news");

function router(app) {
  app.use("/news", newsRouter);
}

module.exports = router;
