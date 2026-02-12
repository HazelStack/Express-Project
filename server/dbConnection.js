// https://www.w3schools.com/nodejs/nodejs_mysql.asp?utm_source=chatgpt.com

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

let db;

try {
  db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  console.log("✅ Connected to MySQL");
} catch (error) {
  console.error("❌ Error connecting to DB:", error.message);
}

export default db;


