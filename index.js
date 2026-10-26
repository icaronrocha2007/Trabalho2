const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req, res) {
    res.send("<h1>Meu site!</h1>");
})

//rota do cadastro de produtos
app.get("/clientes", function(req, res) {
    res.send("<h1>Lista de Clientes!</h1>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req, res) {
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})


//rota com parametro opcional
app.get("/cadastro/{:nome}", function(req, res) {
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome) {
        res.send("<h1>clientes " + nome + " criado!</h1>");
    } else {
        res.send("cliente criado!");
    }

})


app.listen(process.env.PORT, 3000, function(erro) { // cria a aplicação na porta 4000
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
})