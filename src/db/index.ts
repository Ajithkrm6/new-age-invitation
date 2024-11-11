import mysql from "mysql2/promise";

// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_DB_USER,
//   password: process.env.MYSQL_DB_PASSWORD,
//   database: process.env.MYSQL_DB,
// });

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "8686668096@Aji",
  database: "new_age_invitiation",
});

const getConnection = async () => {
  return pool.getConnection();
};

export default getConnection;
