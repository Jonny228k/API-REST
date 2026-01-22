import mysql from "mysql"

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "J2p@.28k#20654",
    database: "bdminecraft"
})

export default conexao