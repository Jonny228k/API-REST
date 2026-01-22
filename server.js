import app from "./src/index.js";
import conexao from "./infra/conexao.js";
const port = 3000


//criando a conexao
conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Conexão realizada com sucesso!")
        
        //criando uma escuta para porta do servidor 
        app.listen(port, () => {
            console.log(`Servidor online em http://localhost:${port}`)
        })
    }

}
)

