const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      "SELECT product_name FROM products",
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
  mysql.getConnection((error, conn) => {
    conn.query(
      "INSERT INTO products (product_name) VALUES (?)",
      [req.body.name],
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
      }
    );
  });
});

module.exports = router;