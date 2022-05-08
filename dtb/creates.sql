CREATE DATABASE IF NOT EXISTS  meu_mercado;

USE meu_mercado;

CREATE TABLE IF NOT EXISTS markets (market_id INT NOT NULL AUTO_INCREMENT, market_name VARCHAR(80), address VARCHAR (150), PRIMARY KEY (market_id));

CREATE TABLE IF NOT EXISTS persons (cpf CHAR(11) NOT NULL, full_name VARCHAR(20), login_user VARCHAR(50), pwd_user VARCHAR(50), market_id INT, PRIMARY KEY (cpf),  FOREIGN KEY (market_id) REFERENCES markets(market_id));

CREATE TABLE IF NOT EXISTS products (product_id INT NOT NULL AUTO_INCREMENT, product_name VARCHAR(50), PRIMARY KEY(product_id));

CREATE TABLE IF NOT EXISTS items (item_id INT NOT NULL AUTO_INCREMENT, market_id INT NOT NULL, product_id INT NOT NULL, item_price FLOAT(5,2), product_picture_path VARCHAR(300), product_description VARCHAR (200), PRIMARY KEY(item_id), FOREIGN KEY (product_id) REFERENCES products(product_id));