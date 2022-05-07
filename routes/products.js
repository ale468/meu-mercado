const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: "GET deu certo!"
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
    res.status(200).send({
      mensagem: "usando um id normal",
      id: id
    });
});

router.post('/', (req, res, next) => {

  mysql.getConnection((error, conn) => {
    conn.query(
      "INSERT INTO products VALUES (?,?)",
      [req.body.id, req.body.name],
      (error, result, field) => {
        conn.release();
        if(error){
          res.status(500).send({
            error: error,
            response: null
          })
        }
        res.status(201).send({
          mensagem: "Produto inserido com sucesso!"
        });
    });
  });
});

router.patch('/', (req, res, next) => {
  res.status(201).send({
      mensagem: "PATCH deu certo",
  });
});

router.delete('/', (req, res, next) => {
  res.status(201).send({
      mensagem: "DELETE deu certo"
  });
});

module.exports = router;