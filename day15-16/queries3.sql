-- Select all the products that have been purchased in the last 24 months.
-- SELECT product_id
-- FROM line_items
-- INNER JOIN orders
-- ON line_items.order_id = orders.id
-- WHERE orders.completed_on > NOW() - INTERVAL '80' MONTH
-- GROUP BY product_id;


-- Select the top 10 products in terms of last year's gross sales.
-- SELECT products.id, SUM(line_items.price * line_items.quantity) AS total FROM products 
-- INNER JOIN line_items ON line_items.product_id = products.id
-- INNER JOIN orders ON line_items.order_id = orders.id
-- WHERE orders.completed_on > NOW() - INTERVAL '80' MONTH
-- GROUP BY products.id
-- ORDER BY total DESC
-- LIMIT 10

-- Select all the products that weren't purchased during the last 24 months.

-- SELECT products.id FROM products WHERE products.id NOT IN(
-- 	SELECT products.id FROM products
-- 		INNER JOIN line_items ON products.id = line_items.product_id
-- 		INNER JOIN orders ON line_items.order_id = orders.id
-- 		WHERE orders.completed_on > NOW() - INTERVAL '4' YEAR
-- 	);