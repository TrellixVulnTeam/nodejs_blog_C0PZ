//Vao thu muc node module de lay thu vien express
const express = require("express"); //import thu vien
//goi function tu express
const app = express();
const port = 3000;

//dinh nghia route: khi di vao "/ se tra ve cai return"
// dau "/" de khi trinh duyet vao
app.get("/categories", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World!");
});

//lang nghe cong 3000
// 127.0.0.1 anh xa hostname localhost
// go localhost  vao trinh duyet se phan giai dns thanh 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
