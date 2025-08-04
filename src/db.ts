import mysql from 'mysql2/promise';
import { QueryResult } from './types';
import { webconfig_json } from './common';

// Create a connection pool
const pool = mysql.createPool({
  host: webconfig_json.mysql_pool_config.host,
  port: webconfig_json.mysql_pool_config.port,
  user: webconfig_json.mysql_pool_config.user,
  password: webconfig_json.mysql_pool_config.password,
  database: webconfig_json.mysql_pool_config.database,
  connectionLimit: webconfig_json.mysql_pool_config.connectionLimit,
  connectTimeout: webconfig_json.mysql_pool_config.connectTimeout,
  waitForConnections: true, 
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  multipleStatements: webconfig_json.mysql_pool_config.multipleStatements
});


export async function query<T = any>(sql: string, params: any[] = []): Promise<QueryResult<T>> {
  try {
    const [rows, fields] = await pool.execute(sql, params);
    
    return {
      rows: Array.isArray(rows) ? rows as T[] : [],
      rowCount: Array.isArray(rows) ? rows.length : 0,
      command: sql.trim().split(' ')[0].toUpperCase(),
      oid: 0, 
      fields: fields || []
    };
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}


export async function connectToDatabase(): Promise<boolean> {
  try {
    console.log('Connecting to MySQL database...');
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database successfully');
    
    await connection.execute('SELECT 1');
    connection.release();
    return true;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    return false;
  }
}

export async function closeDatabase(): Promise<void> {
  try {
    await pool.end();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing database connection:', error);
  }
}

export { pool };