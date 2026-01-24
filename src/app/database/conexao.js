import mysql from "mysql"

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "J2p@.28k#20654",
    database: "bdminecraft"
})

conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao MySQL:', erro)
    } else {
        console.log('MySQL conectado com sucesso!')
    }
})

export default conexao