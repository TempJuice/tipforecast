CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(80) NOT NULL
);

CREATE TABLE transactions (
	id SERIAL PRIMARY KEY,
	username VARCHAR(25),
	type VARCHAR(25),
	date DATE,
	description VARCHAR (40),
	amount INT
);

-- Where Canin told me about using INT for the date
CREATE TABLE transactions (
	id SERIAL PRIMARY KEY,
	username VARCHAR(25),
	type VARCHAR(25),
	date VARCHAR,
	description VARCHAR (40),
	amount INT
);

SELECT * FROM transactions 
WHERE username='ryan';


DROP TABLE transactions;

INSERT INTO transactions (username, type, date, description, amount)
VALUES ($1, $2, $3, $4, $5);

INSERT INTO transactions (type)
VALUES (income);



ALTER TABLE users
ADD amount INT;

ALTER TABLE users
DROP COLUMN amount;

UPDATE transactions
SET date = 111, description = 'aaa', amount = 222
WHERE id = ryan;

