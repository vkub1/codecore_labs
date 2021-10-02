-- Write the following SQL Queries:

-- Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.
-- SELECT
-- 	AVG(price * quantity)
-- FROM line_items
-- LEFT JOIN orders
-- ON line_items.order_id = orders.id
-- WHERE orders.completed_on BETWEEN '2016 01 01' AND '2016 01 31';

-- Select product names, product prices and the lowest price they were sold at during the last 20 months.


-- SELECT products.id,products.price, MIN(line_items.price) AS min_sale_price
-- FROM products
-- INNER JOIN line_items ON line_items.product_id = products.id
-- INNER JOIN orders ON line_items.order_id = orders.id
-- WHERE orders.completed_on BETWEEN '2017 07 17' AND '2021 09 17'
-- GROUP BY line_items.product_id, products.id;

-- [Note] the total price in the line_items table is price per unit and not total price.


