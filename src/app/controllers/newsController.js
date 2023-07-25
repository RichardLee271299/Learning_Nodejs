class NewsController {
  index(req, res) {
    res.send("News Page");
  }
  detail(req, res) {
    res.send("Detail News");
  }
}
module.exports = new NewsController();
