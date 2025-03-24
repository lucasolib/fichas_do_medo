import { createPool } from 'mysql2/promise';

const connection = createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'Ll193728#',
  database: process.env.DB_NAME || 'fichas_do_medo',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;