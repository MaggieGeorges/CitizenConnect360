import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost', 
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true
  }
};

let poolPromise: Promise<sql.ConnectionPool>;

function getPoolPromise(): Promise<sql.ConnectionPool> {
  if (!poolPromise) {
    poolPromise = new sql.ConnectionPool(sqlConfig)
      .connect()
      .then((pool) => {
        console.log('Connected to MSSQL');
        return pool;
      })
      .catch((err) => {
        console.log('Database Connection Failed! Bad Config: ', err);
        throw err;
      });
  }
  return poolPromise;
}

export { sql, getPoolPromise };
