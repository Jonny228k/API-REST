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
/**
 * 
 * @param {string} sql // instrução sql a ser executada
 * @param {string=id | [id, item]} valores // valores a serem passados para consulta
 * @param {string} MensagenReject // mensagem a ser exibida em caso de erro
 * @returns 
 */

export const consulta = (sql, valores="", MensagenReject) => {
    return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (erro, result) => {
                if (erro) {
                    return reject(MensagenReject)
                } else {
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)
                }
            })
        })
}
export default conexao