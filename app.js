const express = require("express");
const app = express();

const productsRoute = require("./routes/products");
const personsRoute = require("./routes/persons");
const itemsRoute = require("./routes/Items");
const marketsRoute = require("./routes/markets");
const morgan = require("morgan");

app.use(morgan('dev'));

app.use('/products', productsRoute);
app.use('/persons', personsRoute);
app.use('/items', itemsRoute);
app.use('/markets', marketsRoute);

module.exports = app;