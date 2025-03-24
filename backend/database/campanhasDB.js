import connection from './connection.js';

const findAll = () => connection.execute(
    `SELECT * FROM campanhas`
  );

export default {
  findAll,
};