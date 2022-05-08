const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: "GET deu certo"
  });
});

router.post('/', (req, res, next) => {

  const item = {
    marketId: req.body.name,
    productId: req.body.price,
    itemPrice: req.body.itemPrice,
    productPicturePath: req.body.productPicturePath,
    productDescription: req.body.productDescription
  };

  res.status(201).send({
      mensagem: "POST deu certo",
      result: item
  });
});

router.patch('/', (req, res, next) => {
  res.status(201).send({
      mensagem: "PATCH deu certo"
  });
});

router.delete('/', (req, res, next) => {
  res.status(201).send({
      mensagem: "DELETE deu certo"
  });
});

module.exports = router;