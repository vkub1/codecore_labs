-- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
-- SELECT products.id, products.name, SUM(products.remaining_quantity + line_items.quantity), 
-- SUM(remaining_quantity) AS remaining, SUM(line_items.quantity) AS sold
-- FROM products
-- INNER JOIN line_items ON line_items.product_id = products.id
-- GROUP BY products.id;


-- Find the average order total price for all the orders in the system
-- SELECT AVG(total_price)
-- FROM (
-- 	SELECT SUM(price * quantity)
-- 	AS total_price 
-- 	FROM line_items 
-- 	GROUP BY product_id
-- ) AS sums
-- ;

