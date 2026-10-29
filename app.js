import express from "express";
import filmes from "./filmes.js";


const app = express();
const port = 3000

app.get("/", (requisicao, resposta) => {
    resposta.send(filmes);
})

app.listen(port,()=> {
    console.log(`Servidor rodando na porta ${port}`);
})