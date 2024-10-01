//Dupla: Ordeli Duarte Filho e Kauã De Souza França
const ask = require("readline-sync")
console.clear()
let doador = {
    
}
const doadores = []
let nome
let idade
let peso
let tipoSanguineo
let dataUltimaDoacao
let opcao
let sistema = true

function menu() {
   console.log("===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====")
   console.log("_____________________________________________________")
   console.log("1. Cadastrar doador")
   console.log("2. Listar doadores")
   console.log("3. Buscar doador por tipo sanguíneo")
   console.log("4. Buscar doador por data da última doação")
   console.log("5. Sair")
   console.log("_____________________________________________________")
   opcao = ask.question("Escolha uma opcao: ")
}

while (sistema){
    menu()
    switch (opcao) {
        case '1':
            console.clear()
            cadastrarDoador()
            break;
        case '2':
            console.clear()
            listarDoadores()
            ask.question("Tecle ENTER para continuar")
            break;
        case '3':
            buscarPorTipoSanguineo()
            break;
        case '4':
            buscarPorData()
            break;
        case '5':
            console.clear()
            console.log("Programa encerrado. ")
            sistema = false
            break;
        default:
            console.log("Opção inválida. Tente novamente.")
    }
}

function cadastrarDoador() {
    nome = ask.question("Digite o nome do doador: ")
    idade = ask.questionInt("Digite a idade do doador: ")
    peso = ask.questionFloat("Digite o peso do doador (kg): ")
    tipoSanguineo = ask.question("Digite o tipo sanguineo: ")
    dataUltimaDoacao = ask.question("Digite a data da ultima doacao (dd/mm/aaaa): ")
    console.clear()
    doador = {
        nome,
        idade,
        peso,
        tipoSanguineo,
        dataUltimaDoacao
    }
    doadores.push(doador)
    console.log("Doador cadastrado com sucesso!")
}

function listarDoadores() {
    if (doadores.length === 0) {
        console.log("Nenhum doador cadastrado.")
        return
    }else{

    console.log("--------------------")
    console.log("LISTA DE DOADORES:")
    console.log("--------------------")
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("-----------------------------------------------------------------")
    console.log(`${doador.nome}| ${doador.idade.toString()}| ${doador.peso.toString()}| ${doador.tipoSanguineo}| ${doador.dataUltimaDoacao}`)
    
    
    console.log("-----------------------------------------------------------------")
}}

