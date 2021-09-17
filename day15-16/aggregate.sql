--1
-- SELECT COUNT(*) FROM students WHERE first_name='Elinore';

--2
-- SELECT COUNT(first_name), first_name FROM students GROUP BY first_name HAVING COUNT(first_name) > 1;

--3
-- SELECT COUNT(first_name), first_name FROM students GROUP BY first_name HAVING COUNT(first_name) > 1 
-- ORDER BY COUNT(first_name) DESC, first_name ASC LIMIT 20;

--4
SELECT name, price FROM products WHERE price = (SELECT MAX(price) FROM products);

--5
SELECT name, sale_price FROM products WHERE sale_price = (SELECT MIN(sale_price) FROM products);

--6
-- SELECT SUM(sale_price * remaining_quantity) AS total_price FROM products;

