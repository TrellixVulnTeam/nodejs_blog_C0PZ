const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  //dinh nghia route: khi di vao "/ se tra ve cai return"
  // dau "/" de khi trinh duyet vao

  //route init

  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
