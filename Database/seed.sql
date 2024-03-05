-- Seed data for the users table
INSERT INTO users (username, password, email, token, created_at) VALUES
  ('user1', 'password1', 'user1@example.com', 'token1', NOW()),
  ('user2', 'password2', 'user2@example.com', 'token2', NOW()),
  ('user3', 'password3', 'user3@example.com', 'token3', NOW());
