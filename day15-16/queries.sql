--1
-- SELECT MAX(price - sale_price) FROM products; 

--2
-- SELECT MAX(price) FROM products WHERE price BETWEEN 25 AND 50 AND remaining_quantity > 0;

--3
-- SELECT name, price FROM products WHERE sale_price < price AND remaining_quantity > 0 ORDER BY price, name;

--4
-- SELECT name, price FROM products WHERE sale_price < price AND remaining_quantity > 0 ORDER BY price, name LIMIT 20 OFFSET 20;

--5 
-- SELECT AVG(price) as average_price FROM products;

--6
-- SELECT AVG(sale_price) as average_sale_price FROM products WHERE sale_price < price;

--7
-- SELECT AVG(sale_price) as average_sale_price FROM products WHERE sale_price < price AND remaining_quantity > 0;

--8
-- UPDATE products
-- SET remaining_quantity=0
-- WHERE name ILIKE '%paper%';

--9
-- UPDATE products
-- SET remaining_quantity = ROUND(random() * 21 + 5)
-- WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';

--10
-- SELECT LEAST(price,sale_price) AS total_price FROM products WHERE remaining_quantity > 0 
-- ORDER BY total_price ASC LIMIT 10 OFFSET 10;

--11
-- SELECT COUNT(sale_price) AS product_count, SUM(sale_price * remaining_quantity) 
-- AS total_price, sale_price FROM products GROUP BY sale_price; 

--12
-- UPDATE products
-- SET remaining_quantity = remaining_quantity * 2
-- WHERE price = (SELECT MAX(price) FROM products);