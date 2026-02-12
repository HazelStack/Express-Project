// https://www.w3schools.com/nodejs/nodejs_mysql.asp?utm_source=chatgpt.com


import mysql from 'mysql2/promise'
let db

try {
  db =  await mysql.createConnection ( {
  host: 'localhost',
  user: 'root',
  password: 'BGLoveAlways123!',
  database: 'studentdb'
  })
  console.log("2 ✅ Connected to DB");
}
catch (error) {
  console.log("1 ❌ Error connecting to DB");
}





export default db;

