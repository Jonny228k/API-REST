import app from "./src/index.js";
const port = 3000


 //criando uma escuta para porta do servidor 
        app.listen(port, () => {
            console.log(`Servidor online em http://localhost:${port}`)
        })



