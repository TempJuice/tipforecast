CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(80) NOT NULL
);

CREATE TABLE transactions (
	id SERIAL PRIMARY KEY,
	username VARCHAR(25),
	type VARCHAR(12),
	date INT,
	description VARCHAR (40),
	amount INT
);


DROP TABLE transactions;

INSERT INTO transactions (username, type, date, description, amount)
VALUES ($1, $2, $3, $4, $5);


ALTER TABLE users
ADD amount INT;

ALTER TABLE users
DROP COLUMN amount;

UPDATE users
SET date = 111, type = 'aaa', amount = 222
WHERE username = ryan;

