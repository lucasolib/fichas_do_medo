import connection from './connection.js';

const findAll = () => connection.execute(
  `SELECT * FROM user`,
);

const find = (user) => connection.execute(
  `SELECT * FROM user WHERE username = ?`,
  [user.username],
);

const insert = (user) => connection.execute(
  `INSERT INTO user
    (username, email, password) VALUES (?, ?, ?)`,
  [user.username, user.email, user.password],
);

const update = (user, id) => connection.execute(
  `UPDATE user 
    SET username = ? WHERE id = ?`,
  [user.username, id],
);

const remove = (id) => connection.execute(
  `DELETE FROM user WHERE id = ?`,
  [id],
);

export default {
  findAll,
  find,
  insert,
  update,
  remove,
};