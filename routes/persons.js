const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: "GET deu certo"
  });
});

router.post('/', (req, res, next) => {
  
  const person = {
    cpf: req.body.cpf,
    price: req.body.idLogin,
    fullName: req.body.fullName,
    user: req.body.user,
    password: req.body.password,
    marketId: req.body.marketId,
    marketPassword: req.body.marketPassword,
  };
  
  res.status(201).send({
      mensagem: "POST deu certo"
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