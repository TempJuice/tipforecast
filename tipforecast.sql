CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(80) NOT NULL,
	date INT,
	type VARCHAR (25),
	amount INT
);

DROP TABLE USERS;

ALTER TABLE users
ADD amount INT;

ALTER TABLE users
DROP COLUMN amount;

INSERT INTO users (date, type, amount) 
VALUES ($1, $2, $3) 
WHERE 

