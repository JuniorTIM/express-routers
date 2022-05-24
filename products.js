const { Router } = require("express");

const product = Router();

product.get("/products", (req, res) => {
  product.send("Продукт 1");
});

product.get("/products/:id", (req, res) => {
  product.send(`Продукт ${req.params.id} изменен`);
});

product.post("/products", (req, res) => {
  product.send("Продукт 2");
});

product.delete("/products/:id", (req, res) => {
  product.send(`Продукт ${req.params.id} удален`);
});

module.exports = product;
