const express = require("express");
const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: "GET deu certo"
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;

  if (id == "especial") {
    res.status(200).send({
      mensagem: "Usando id especial",
      id: id
    });
  }else{
    res.status(200).send({
      mensagem: "usando um id normal",
      id: id
    });
  }

  
});

router.post('/', (req, res, next) => {
  res.status(201).send({
      mensagem: "POST deu certo"
  });
});

module.exports = router;