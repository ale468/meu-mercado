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

app.use((req,res,next)=>{
    const erro = new Error("Cannot find route specified.")
    erro.status = 404;
    next(erro)
})

app.use((error, req, res, next)=>{
  res.status(error.status || 500)
  return res.send({
    erro: {
        mensagem: error.message
    }
  });
});
module.exports = app;