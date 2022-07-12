-- TABLE
CREATE TABLE customers (
  id int NOT NULL,
  first_name STRING,
  last_name STRING,
  address STRING
 );
CREATE TABLE orders (
  	id int NOT NULL,
  	order_number int,
  	customer_id int,
  	product_id int,
  	PRIMARY KEY (id),
  	FOREIGN KEY (customer_id) REFERENCES customers(id),
  	FOREIGN KEY (product_id) REFERENCES products(id)
  );
CREATE TABLE products (
	id INT,
  	name STRING,
  	price MONEY, stock INT,
  	PRIMARY KEY (id)
  );
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
