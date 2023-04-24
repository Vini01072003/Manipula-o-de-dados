/*****
 * Objetivo: API que interage com o banco de dados(GET, POST, DELETE, PUT) 
 * Data 14/04/2023
 * Autor: Marcel
 * Versão 1.0
 * 
 * 
 * /
 *  Para realizar a conexão com o Bnaco de Dados iremos ilizar o Prisma
 * npm install prisma --save
 * npx prisma
 * npm prisma init
 * npm install @prisma/client
 */


//import das dependencias do projeto
const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');
const { request } = require('http');
const { response } = require('express');



//Cria o objeto app utilizando a classe express
const app = express()

//Configura as permissões do cors
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next();

});

//CRUD (Create, Read, Update, Delete)


//
// EndPoint: Tabela Alunos
// Versão: 1.0
// Data 14/04/2023



//Primeiro enndpoint retorna dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

    let controllerAluno = require('./controller/controller_aluno.js')



    //solicita a controller que retorna todos os alunos no BD

    let dados = await controllerAluno.selecionarTodosAlunos()


    //Valida se sexistem registros para retorna as requisições
    if (dados) {
        response.json(dados);
        response.status(200)

    } else {
        response.json()
        response.status(404)

    }

})

//EndPoint: Retorna dados do aluno pelo id
app.get('/v1/lion-school/aluno:id', cors(), async function(request, response) {

})


//EndPoint: Insere novo aluno
app.post('/v1/lion-school/aluno', cors(), async function(request, response) {

})


//EndPoint: 
app.put('/v1/lion-school/aluno:id', cors(), async function(request, response) {

})


//EndPoint: Deleta o aluno pelo id
app.delete('/v1/lion-school/aluno:id', cors(), async function(request, response) {

})

app.listen(8080, function() {
    console.log('Servidor aguradando requisições da porta 8080!')
})