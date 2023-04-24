/*****
 * 
 */


//Inserir um novo registro no banco de dados
const insertAluno = function(dadosAluno) {



}

const updateAluno = function(dadosAluno) {

}

const deleteAluno = function(id) {

}

const selectAllAluno = async function() {

    //Import da biblioteca do prisma client(responsavel por manipular dados no BD)    
    let { PrismaClient } = require('@prisma/client')


    //Instancia da classe do PrismaClient
    let prisma = new PrismaClient()

    //Variavel que executa no BD
    let sql = 'select * from tbl_aluno'


    //Executa no banco de dados o scriptSQL
    //$queryRawUnsafe() é utilizado para quando o scriptSQL entrar em uma váriavel
    //$queryRAW() é utilizado quando passar o script direto no método(EX:$queryRawUnsafe('select * from tbl_aluno'))

    let rsAluno = await prisma.$queryRawUnsafe(sql)


    //Valida se BD retornou algum registro 
    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;


}

//Inserir um novo registro filtrado pelo ID do Banco de Dados
const selectByidAluno = function(id) {

}

module.exports = {
    selectAllAluno
}