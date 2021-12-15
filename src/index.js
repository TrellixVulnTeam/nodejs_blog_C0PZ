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

const route = require("./routes");
const routes = require("./routes");

//kiem tra phuong thuc static co join thu muc
app.use(express.static(path.join(__dirname, "public")));
//Midle ware

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// app.use(morgan("combined"));

//template engine
const hbs = handlebars.create({ extname: ".hbs" });
app.engine("hbs", hbs.engine);

//set cho ung dung express su dung view handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app);

//lang nghe cong 3000
// 127.0.0.1 anh xa hostname localhost
// go localhost  vao trinh duyet se phan giai dns thanh 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
