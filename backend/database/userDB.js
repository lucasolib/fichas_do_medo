import connection from './connection.js';

const find = () => connection.execute(
    `SELECT * FROM campanhas WHERE `
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