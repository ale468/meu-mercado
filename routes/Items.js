const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

router.get('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      "SELECT * FROM items",
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

  mysql.getConnection((error,conn) => {
      conn.query(
        "SELECT product_id FROM products WHERE product_id = ?",
        req.body.productId,
        (error, result, field) => {
          if(result.length == 0){
            res.status(400).send({
              message: "product_id not found! Please try again."
            });
          }else{
            conn.query(
              "SELECT market_id FROM markets WHERE market_id = ?",
              req.body.marketId,
              (error, result, field) => {
                if(result.length == 0){
                  res.status(400).send({
                    message: "market_id not found! Please try again."
                  });
                }else{
                  conn.query(
                    "INSERT INTO items (market_id, product_id, item_price, product_picture_path, product_description) VALUES (?,?,?,?,?)",
                    [req.body.marketId, req.body.productId, req.body.item_price, req.body.productPicturePath, req.body.productDescription],
                    (error, result, field) => {
                      if(error){
                        res.status(500).send({
                          error: error,
                          response: null
                        })
                      }
                      res.status(201).send({
                        mensagem: "insertion concluded!",
                      });
                    }
                  );
                }
              }
            );
          }
        }
      );
  })
});

router.patch('/', (req, res, next) => {
  mysql.getConnection((error, conn) => {
    conn.query(
      "SELECT product_id FROM products WHERE product_id = ?",
      req.body.productId,
      (error, result, field) => {
        if(result.length == 0){
          res.status(400).send({
            message: "product_id not found! Please try again."
          });
        }else{
          conn.query(
            "SELECT market_id FROM markets WHERE market_id = ?",
            req.body.marketId,
            (error, result, field) => {
              if(result.length == 0){
                res.status(400).send({
                  message: "market_id not found! Please try again."
                });
              }else{
                conn.query(
                  "UPDATE items SET product_id = ?, market_id = ?, item_price = ?, product_picture_path = ?, product_description = ? WHERE item_id = ?",
                  [req.body.productId, req.body.marketId, req.body.itemPrice, req.body.productPicturePath, req.body.productDescription, req.body.itemId],
                  (error, result, field) => {
                    if(error){
                      res.status(500).send({
                        error: error,
                        response: null
                      })
                    }else{
                      res.status(201).send({
                        message: "Update efetuado com sucesso!",
                        itemPrice: req.body.itemPrice
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  });
});


router.delete('/', (req, res, next) => {
  res.status(201).send({
      mensagem: "DELETE deu certo"
  });
});

module.exports = router;