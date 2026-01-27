import app from "./app.js";
const port = process.env.PORT || 3000;


 //criando uma escuta para porta do servidor 
        app.listen(port, () => {
            console.log(`Servidor online em http://localhost:${port}`)
        })



