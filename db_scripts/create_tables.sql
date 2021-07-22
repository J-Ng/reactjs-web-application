use poc_schema;

CREATE TABLE ORDERS (
order_id int auto_increment,
user_id int,
purchase_date date,
delivery_address varchar(255),
purchase_price double,
product_id int,
quantity int,
discount double,
status varchar(50),
primary key (order_id)
);

CREATE TABLE CART (
user_id int,
product_id int,
quantity int,
primary key (user_id)
);

CREATE TABLE USER (
user_id int auto_increment,
first_name varchar(50),
middle_name varchar(50),
last_name varchar(50),
birthday date,
gender varchar(1),
email varchar(100),
user_name varchar(50),
password varchar(50),
address varchar(255),
cc_number varchar(20),
cc_name varchar(100),
cc_expiry_date date,
cc_security_code int,
primary key (user_id)
);

CREATE TABLE PRODUCT (
product_id int auto_increment,
product_name varchar(255),
product_description varchar(255),
brand varchar(100),
product_type varchar(100),
price double,
country_of_origin varchar(100),
serial_number varchar(100),
img blob,
primary key (product_id) 
);

INSERT INTO USER (
user_id,first_name,middle_name,last_name,birthday,gender,email,user_name,password,address,cc_number,cc_name,cc_expiry_date,cc_security_code
) VALUES (1,'Jose','Si','Ng','1990-04-25','M','ngjosesi@gmail.com','ngjosesi','12345','111A Depot Road','na','na','1900-01-01',123);

insert into PRODUCT (
product_id,product_name,product_description,brand,product_type,price,country_of_origin,serial_number)
VALUES (1,'Black Shirt','A Shirt that is colored black','Gucci','Clothing',10.1,'Paris','123456');

insert into PRODUCT (
product_id,product_name,product_description,brand,product_type,price,country_of_origin,serial_number)
VALUES (2,'Red Shirt','A Shirt that is colored red','Gucci','Clothing',10.1,'Paris','123457');

insert into PRODUCT (
product_id,product_name,product_description,brand,product_type,price,country_of_origin,serial_number)
VALUES (3,'Blue Shirt','A Shirt that is colored blue','Gucci','Clothing',10.1,'Paris','123458');