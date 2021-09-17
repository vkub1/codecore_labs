--1
--SELECT * from students WHERE age BETWEEN 35 AND 45 LIMIT 10;

--2
-- SELECT * FROM students WHERE age>25 AND first_name ILIKE ('%le%') ORDER BY id ASC, first_name DESC LIMIT 10 OFFSET 20;

--3
-- SELECT * FROM students WHERE age IS NOT NULL ORDER BY age DESC LIMIT 10;

--4
-- SELECT * FROM students WHERE age=25 AND last_name LIKE ('%n%');

--Products 

--1
-- SELECT * FROM products WHERE price>sale_price;

--2
-- SELECT * FROM products WHERE price>sale_price AND remaining_quantity > 0 ORDER BY sale_price ASC;

--3
-- SELECT price,sale_price FROM products WHERE price BETWEEN 25 AND 50 AND price>sale_price;