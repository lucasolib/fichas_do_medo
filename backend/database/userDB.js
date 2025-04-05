import connection from './connection.js';

const find = (user) => connection.execute(
    `SELECT * FROM user WHERE username = ?`,
    [user.username],
  );

const insert = (user) => connection.execute(
  `INSERT INTO user
    (username, email, password) VALUES (?, ?, ?)`,
    [user.username, user.email, user.password],
);

export default {
  find,
  insert,
};