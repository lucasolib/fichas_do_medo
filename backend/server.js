import app from './app.js';
import connection from './database/connection.js';

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});