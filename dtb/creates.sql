CREATE DATABASE IF NOT EXISTS  meu_mercado;

USE meu_mercado;

CREATE TABLE login_type (login_id INT NOT NULL, login_type varchar (15) NOT NULL, PRIMARY KEY (login_id));

CREATE TABLE markets (market_id INT NOT NULL, market_name VARCHAR(80), address VARCHAR (150), PRIMARY KEY (market_id));

CREATE TABLE persons (cpf CHAR(11) NOT NULL, login_id INT NOT NULL,
       full_name VARCHAR(20), login_user VARCHAR(50), pwd_user VARCHAR(50), market_id INT, PRIMARY KEY (cpf), FOREIGN KEY (login_id) REFERENCES login_type(login_id), FOREIGN KEY (market_id) REFERENCES markets(market_id));

CREATE TABLE products (product_id VARCHAR(80) , product_name VARCHAR(50), PRIMARY KEY(product_id));

CREATE TABLE items (market_id INT NOT NULL, product_id VARCHAR(80) NOT NULL, item_price FLOAT(5,2), product_picture_path VARCHAR(300), product_description VARCHAR (200), FOREIGN KEY (product_id) REFERENCES products(product_id));
