const path = require("path");
const handlebars = require("express-handlebars");
const express = require("express");
const { Console } = require("console");
const app = express();
const port = 3000;
const route = require("./routes");

app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resource/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

route(app);
// app.get("/mp3", (req, res) => {
//   res.render("home");
// });
// app.get("/detail", (req, res) => {
//   res.render("detail");
// });

// app.get("/api", (req, res) => {
//   res.set("Content-Type", "application/json");
//   // res.send({ đông: 22, khoa: 30 });
//   res.send("<h1>Hello</h1>");
// });

// app.get("/customer", (req, res) => {
//   if (req.query.name == "Đông Lê") {
//     res.send({ name: "Đông Lê", age: "23" });
//   } else {
//     res.send({ name: "An Đặng", age: "20" });
//   }
//   console.log(req.query.name);
// });

// app.post("/vnsign", (req, res) => {
//   res.send({
//     status: "OK",
//     err: "",
//     message: "",
//     isdownloading: 0,
//     scriptdata: "",
//     apiurl: "",
//     apimaxtimeout: 0,
//     cdnurl: "",
//     scriptid: "",
//     campaignid: "",
//     animationtext: "",
//     isStreaming: 1,
//     url_streaming: "https://podcast.vnsign.net:40443/stream/xoso",
//   });

//   console.log(req.body);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
