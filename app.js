const express = require("express");
const app = express();
const productsRoute = require("./routes/products");

app.use('/products', productsRoute);

module.exports = app;