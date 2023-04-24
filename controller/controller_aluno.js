//Função para receber os dados do APP e enviar para o model para inserir um novo item
const inserirAluno = function(dadosAluno) {

}


//Função para receber os dados do APP e enviar para o model para atualizar um novo item 
const atualizarAluno = function(dadosAluno) {

}


//Função para receber os dados do APP e nviar 
const deletarAluno = function(id) {

}

const selecionarTodosAlunos = async function() {

    //Import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')


    //Solicita ao DAO  todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno()

    //Cria um objeto do tipo Json
    let dadosJson = {}

    //Valida se o BD teve registros
    if (dadosAluno) {
        //Adiciona o array de alunos e um JSON para retornar ao app
        dadosJson.alunos = dadosAluno
        return dadosJson;

    } else
        return false;

}

//Inserir um novo registro filtrado pelo ID do Banco de Dados
const buscarIdAluno = function(id) {

}

module.exports = {
    selecionarTodosAlunos
}