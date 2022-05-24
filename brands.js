const { Router } = require("express");

const brand = Router();

brand.get("/brands", (req, res) => {
  brand.send("Брэнд 1");
});

brand.post("/brands", (req, res) => {
  brand.send("Брэнд 2");
});

brand.delete("/brands", (req, res) => {
  brand.send("Брэнд 3");
});

module.exports = brand;
