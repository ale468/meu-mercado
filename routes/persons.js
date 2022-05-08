const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.post('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (req.body.marketId != "") {
      conn.query(
        "SELECT * FROM markets WHERE market_id = ?",
        req.body.marketId,
        (error, result, field) => {
          if (result.length == 0){
            res.status(400).send({
              message: "Market id not found!"
            })
          }else if(req.body.marketPassword == result[0].market_password){
            conn.query(
              "INSERT INTO persons VALUES (?,?,?,?,?)",
              [req.body.cpf, req.body.fullName, req.body.user, req.body.password, req.body.marketId],
              (error, result, field) => {
                conn.release();
                if(error){
                  res.status(500).send({
                    error: error,
                    response: null
                  })
                }
                res.status(201).send({
                  message: "Produto inserido com sucesso!",
                });
            });
          }else{
            res.status(400).send({
              message: "Senha inválida para esse mercado!",
            })
          }
        }
      );
    }
  });
});

module.exports = router;
