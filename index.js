const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/training/self_xss", (req, res) => {
  res.render("self_xss.ejs");
});

app.get("/training/reflected", (req, res) => {
  const search_word = req.query.search_word;
  res.render("reflected.ejs", { search_word });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
