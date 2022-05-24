const express = require("express");
const app = express();
const port = 4000;

app.use(require("./products.js"));
app.use(require("./brands.js"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
