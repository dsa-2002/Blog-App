import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"sqluser",
  password: "123",
  database:"blog"
})