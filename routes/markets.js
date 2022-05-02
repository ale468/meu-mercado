const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: "GET deu certo"
  });
});

router.post('/', (req, res, next) => {
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