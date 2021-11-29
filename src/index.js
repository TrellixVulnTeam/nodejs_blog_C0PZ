//Vao thu muc node module de lay thu vien express
const path = require("path");
const express = require("express"); //import thu vien

//morgan: show logger
const morgan = require("morgan");

//template engine
const handlebars = require("express-handlebars");

//goi function tu express
const app = express();

const port = 3000;

//kiem tra phuong thuc static co join thu muc
app.use(express.static(path.join(__dirname, "public")));
//
app.use(morgan("combined"));

//template engine
const hbs = handlebars.create({ extname: ".hbs" });
app.engine("hbs", hbs.engine);

//set cho ung dung express su dung view handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log(__dirname);

//dinh nghia route: khi di vao "/ se tra ve cai return"
// dau "/" de khi trinh duyet vao
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

//lang nghe cong 3000
// 127.0.0.1 anh xa hostname localhost
// go localhost  vao trinh duyet se phan giai dns thanh 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
