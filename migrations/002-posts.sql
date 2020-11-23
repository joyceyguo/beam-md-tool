--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Users (
  id INTEGER PRIMARY KEY,
  username VARCHAR(20),
  password_hash VARCHAR(20)
);

CREATE TABLE Posts (
  id INTEGER PRIMARY KEY,
  body VARCHAR(140),
  user_id INTEGER,
  reply_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES Users(id),
  FOREIGN KEY(reply_id) REFERENCES Posts(id)
);




--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Posts;
DROP TABLE Users;
