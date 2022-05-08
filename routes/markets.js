const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get('/:productId', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      "SELECT product_name FROM products WHERE product_id = ?",
      [req.params.productId],
      (error, result, field) => {
        conn.release();
        if(error){
          res.status(500).send({
            error: error,
            response: null
          })
        }
        res.status(200).send({
          message: "Get concluído!",
          result: result,
        });
    });
  });
});

router.post('/', (req, res, next) => {
  res.status(201).send({
      mensagem: "POST deu certo",
      result: market
  });
});

module.exports = router;