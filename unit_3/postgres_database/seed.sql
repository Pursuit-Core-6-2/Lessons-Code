DROP DATABASE pursuit;

CREATE DATABASE pursuit;

-- Connect to pursuit database
\c pursuit
-- Create classes
CREATE TABLE classes (
  id SERIAL PRIMARY KEY,
  class_stack VARCHAR(3),
  room_number INT
);

-- Create fellows table
CREATE TABLE fellows (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR,
  lastname VARCHAR,
  age INT,
  email VARCHAR UNIQUE,
  class_id INT REFERENCES classes (id)
);

-- Insert new class in to classes table
INSERT INTO classes (class_stack, room_number)
  VALUES ('WEB', 2);

-- Insert fellow to fellows
INSERT INTO fellows (firstname, lastname, age, email, class_id)
  VALUES ('Jon', 'Snow', 500, 'jsnow@winterfell.com', 1), ('Bran', 'Stark', 18, 'bstarck@winterfell.com', 1);

-- Update age of Jon snow from 500 to 50
UPDATE
  fellows
SET
  age = 50,
  lastname = 'stark'
WHERE
  firstname = 'Jon';

-- Select Jon Snow
SELECT
  firstname,
  lastname,
  age
FROM
  fellows
WHERE
  firstname = 'Jon';

-- Delete
DELETE FROM fellows
WHERE lastname = 'Stark';

-- Table without Bran
SELECT
  *
FROM
  fellows;

