DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Rubber Duck", "Toys", 1.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Nerf Gun", "Toys", 40.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Nerf Darts(100)", "Toys", 20.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Bar Soap(6)", "Shower", 2.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Shampoo", "Shower", 5.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Bar Soap(6)", "Shower", 2.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Conditioner", "Shower", 5.00, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Rough Towel", "Shower", 1.00, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES  ("THE FLUFFIEST Towel", 100.00, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Checkers", "Games", 10.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Chess", "Games", 10.00, 20);
