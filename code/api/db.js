import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"chen00814",
    database:"webcourse"
})