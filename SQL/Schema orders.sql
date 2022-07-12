CREATE TABLE orders (
  	id int NOT NULL,
  	order_number int,
  	customer_id int,
  	product_id int,
  	PRIMARY KEY (id),
  	FOREIGN KEY (customer_id) REFERENCES customers(id),
  	FOREIGN KEY (product_id) REFERENCES products(id)
  )