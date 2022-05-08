const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      "SELECT market_name FROM markets",
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
      }
    );
  });
});

router.post('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      "SELECT market_name FROM markets where market_name = ?",
      req.body.marketName,
      (error, result, field)=>{
        if(result.length == 0){
          conn.query(
            "INSERT INTO markets (market_name, address, market_password) VALUES (?, ?, ?)",
            [req.body.marketName, req.body.address, req.body.marketPassword],
            (error,result,field)=>{
              if(error){
                res.status(500).send({
                  error: error,
                  response: null
                })
              }
              res.status(201).send({
                mensagem: "Insertion concluded!",
              });
            }
          );
        }else{
          res.status(400).send({
            message: "The market entered is already registered!"
          })
        }
      }
    );
    
  })

  
});

module.exports = router;