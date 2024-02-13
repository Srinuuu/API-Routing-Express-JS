const express = require("express");
const app = express();

app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/", (req, res) => {
  res.send("Home Page");
});
module.exports = app;
