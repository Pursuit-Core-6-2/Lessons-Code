-- DROP DATABASE IF EXISTS booke;
-- CREATE DATABASE booke;

-- \c booke

DROP TABLE IF EXISTS bookmarks;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial,
    email VARCHAR(50),
    username VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE bookmarks (
    id serial PRIMARY KEY,
    user_id int NOT NULL,
    url VARCHAR(255),
    title VARCHAR(255),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id)
)

