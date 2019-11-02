DROP DATABASE IF EXISTS facebook_db;

CREATE DATABASE facebook_db;

\c facebook_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    age INT
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users (id) ON DELETE CASCADE,
    body VARCHAR
);

-- Add some users
INSERT INTO users(firstname, lastname, age)
    VALUES('Adam', 'Addams', 40),
          ('Beth', 'Brown', 51),
          ('Cal', 'Cassady', 14),
          ('Don', 'Donner', 33),
          ('Eve', 'Edwards', 83);

-- Add some posts
INSERT INTO posts (poster_id, body)
    VALUES(1, 'I am Adam! Hello!'),
          (1, 'I like pancakes'),
          (2, 'I am Beth! Welcome to my blog.'),
          (2, 'My zodiac sign is Gemini'),
          (3, 'I am Cal! This is my first post :)'),
          (4, 'I am Don! Hello world!'),
          (4, 'I enjoy long walks on the beach'),
          (5, 'I am Eve! Welcome!'),
          (5, 'I like turtles'),
          (5, 'My favorite number is 8');

-- Let's verify that the users and posts were inserted 
SELECT * FROM users;
SELECT * FROM posts;
