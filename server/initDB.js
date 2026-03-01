import pool from './dbConnection.js';

const tables = [
  {
    name: 'users',
    sql: `
      CREATE TABLE IF NOT EXISTS users (
        "userID" SERIAL PRIMARY KEY,
        username VARCHAR(45) NOT NULL,
        password VARCHAR(45),
        email VARCHAR(45)
      );
    `
  },
  {
    name: 'categories',
    sql: `
      CREATE TABLE IF NOT EXISTS categories (
        "categoryID" SERIAL PRIMARY KEY,
        name VARCHAR(45),
        description VARCHAR(100)
      );
    `
  },
  {
    name: 'questions',
    sql: `
      CREATE TABLE IF NOT EXISTS questions (
        "questionID" SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        "userID" INT NOT NULL REFERENCES users("userID"),
        "categoryID" INT NOT NULL REFERENCES categories("categoryID")
      );
    `
  },
  {
    name: 'answers',
    sql: `
      CREATE TABLE IF NOT EXISTS answers (
        "answerID" SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        "questionID" INT NOT NULL REFERENCES questions("questionID"),
        "userID" INT NOT NULL REFERENCES users("userID")
      );
    `
  }
];

const createTables = async () => {
  for (const table of tables) {
    try {
      await pool.query(table.sql);
      console.log(`✅ ${table.name} table created or already exists`);
    } catch (err) {
      console.error(`❌ Error creating ${table.name}:`, err.message);
    }
  }
  console.log('🎉 Done checking all tables');
  process.exit(0);
};

createTables();