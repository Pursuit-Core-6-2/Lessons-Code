-- Database and Table creation
DROP DATABASE IF EXISTS facebook_db;

CREATE DATABASE facebook_db;

\c facebook_db
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  age INT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  poster_id INT REFERENCES users (id) ON DELETE CASCADE,
  body TEXT
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  liker_id INT REFERENCES users (id) ON DELETE CASCADE,
  post_id INT REFERENCES posts (id) ON DELETE CASCADE
);

-- Insert user
INSERT INTO users(age)
  VALUES('25');


--
-- Add and Manipulate Data
--
----------
-- Add 5 users
----------
INSERT INTO users (name, age)
  VALUES ('Daenerys Targaryen', 30), 
         ('Jon Snow', 35), 
         ('Arya Stark', 24), 
         ('Bran Stark', 18), 
         ('Jaime Lannister', 40);

---------
--  Three posts for user 1
---------
INSERT INTO posts (poster_id, body)
  VALUES (1, 'Hanging out with my dragons 🐉'), 
         (1, 'Westeros here I come'), 
         (1, 'Somebody stole my dragons');

---------
--  Other users posts
---------
INSERT INTO posts (poster_id, body)
  VALUES (2, 'My family are all wolves'), 
         (3, 'I can see once again'), 
         (4, 'U know how to control animals with you mind?'),
         (5, 'My Golde hand');

---------
-- User with id = 1 likes all the other users posts. (Excluding their own ofcourse)
---------
INSERT INTO likes (liker_id, post_id)
  VALUES (1, 4),
         (1, 5),
         (1, 6),
         (1, 7);

---------
-- User with id = 2 likes only his/her own post.
---------
INSERT INTO likes (liker_id, post_id)
  VALUES(2, 4);

---------
-- User's 2 & 1 posts are liked by user 3
---------
INSERT INTO likes (liker_id, post_id)
  VALUES (3, 1),
         (3, 2),
         (3, 3),
         (3, 4);

---------
-- User 4 likes all posts except her own and user's 1.
---------
INSERT INTO likes (liker_id, post_id)
  VALUES (4, 4),
         (4, 5),
         (4, 7);

---------
-- All the posts of user's 1, 2, 3 are liked by user 5.
---------
INSERT INTO likes (liker_id, post_id)
  VALUES (5, 1),
         (5, 2),
         (5, 3),
         (5, 4),
         (5, 5);

---------
-- Update the age of user with id 5 to be 31.
---------
UPDATE users
  SET age = 31
  WHERE id = 5;

-- Verify prev update
-- SELECT * FROM users WHERE id = 5;

---------
-- Update the name of user 3 to be Alfred
---------
UPDATE users
  SET name = 'Alfred'
  WHERE id = 3;

-- -- Verify prev update
-- SELECT * FROM users WHERE name = 'Alfred';

---------
-- User 1 stops liking user's 2 post.
---------

-- Briahana's
DELETE FROM likes 
  WHERE liker_id = 1 AND post_id = (
    SELECT id FROM POSTS 
      WHERE poster_id = 2
  )
;

-- Alejo's 1st Approach.
-- DELETE FROM likes WHERE post_id = 4 AND liker_id = 1;

-- Alejo's 2nd Approach.
-- DELETE
-- FROM likes tl 
-- USING posts tp
-- WHERE tl.liker_id = 1 AND tp.poster_id = 2;


---------
-- The user who had three posts decides to delete his/her last post.
---------

-- Sharrar's Approach
-- DELETE FROM likes
-- WHERE post_id = 4; -- deletes likes on their posts

-- DELETE FROM posts
-- WHERE poster_id = 2; -- deletes their posts

-- Alejo's Approach. Taking advantage of ON DELETE CASCADE
DELETE FROM posts WHERE poster_id = 1 AND body = 'Somebody stole my dragons'; 

---------
-- User 2 decides to delete their account from of social media app.
---------

DELETE FROM users WHERE id = 1;

-----------
-- Find the user who has given the most likes.
-----------

-- Douglas' Approach

SELECT * FROM users
  WHERE id = (
    -- Inner. Count the number of likes a users have given
    SELECT liker_id
      FROM likes
      GROUP BY liker_id
      ORDER BY COUNT(liker_id) DESC
      LIMIT 1
  )
;

\echo =========================

-- Sergio's Approach
SELECT name, COUNT(post_id) AS num_of_likes
  FROM users
  JOIN likes ON users.id = likes.liker_id
  GROUP BY name
  ORDER BY num_of_likes DESC
  LIMIT 1
  ;



-- Alejo's Approach
SELECT count(likes.id) AS likes_given, users.name FROM likes
  JOIN users ON liker_id = users.id
  GROUP BY (users.name)
  ORDER BY likes_given DESC
  LIMIT 1
;

-- 2nd Approach
-- Finding the most liked post first and 
-- then nested select to grab the user by liker_id

-- Stage 1.
-- SELECT COUNT(likes.id) AS times_liked, liker_id FROM likes
--  GROUP BY liker_id
--  ORDER BY times_liked DESC; 

-- Stage 2.
-- SELECT liker_id FROM likes
--  GROUP BY liker_id
--  ORDER BY COUNT(likes.id) DESC
--  LIMIT 1;

-- Stage 3. Final, nesting
SELECT * from users
  WHERE id = (
    SELECT liker_id FROM likes
      GROUP BY liker_id
      ORDER BY COUNT(likes.id) DESC
      LIMIT 1
  );


-----------
-- Find the most liked post.
-----------

SELECT posts.id AS post_id, posts.body, likes.id, likes.liker_id
  FROM posts 
  JOIN likes ON posts.id = likes.post_id
;
--- Option 1.
SELECT posts.id AS post_id
  FROM posts 
  JOIN likes ON posts.id = likes.post_id
;
  SELECT posts.id AS post_id, posts.body, COUNT(posts.id) AS times_liked
  FROM posts 
  JOIN likes ON posts.id = likes.post_id
  GROUP BY posts.id
  ORDER BY times_liked DESC
  LIMIT 1;

-- Option 2.
-- Finding the most liked post first and 
-- then nested select to grab the user by liker_id

-- Stage 1.
-- SELECT COUNT(likes.id) AS times_liked, liker_id FROM likes
--  GROUP BY liker_id
--  ORDER BY times_liked DESC; 

-- Stage 2.
-- SELECT liker_id FROM likes
--  GROUP BY liker_id
--  ORDER BY COUNT(likes.id) DESC
--  LIMIT 1;

-- Stage 3. Final, nesting
-- SELECT * from users
--   WHERE id = (
--     SELECT liker_id FROM likes
--       GROUP BY liker_id
--       ORDER BY COUNT(likes.id) DESC
--       LIMIT 1
--   );

--
-- Find all the information of the user how posted the most liked post.
--

-- Find the user who posted the most liked post by the most liked post id
SELECT * FROM users
  JOIN posts ON users.id = posts.poster_id
  WHERE posts.id = (

    -- Find the most liked post
    SELECT posts.id
      FROM posts 
      JOIN likes ON posts.id = likes.post_id
      GROUP BY(posts.id)
      ORDER BY COUNT(posts.body) DESC
      LIMIT 1
  );
