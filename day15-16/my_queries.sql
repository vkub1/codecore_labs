-- CREATE TABLE cars(
--     id SERIAL, 
--     make VARCHAR(50),
--     model VARCHAR(50),
--     doors INTEGER,
--     description TEXT
-- );

-- ALTER TABLE cars ADD COLUMN color VARCHAR(50);

-- INSERT INTO cars(make, model, description,color, doors)
-- VALUES ('Toyota', 'abc', 'it is a car', 'blue', 4);

UPDATE cars
SET color='black'
WHERE id=1;
