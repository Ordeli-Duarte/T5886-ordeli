//Dupla: Ordeli Duarte Filho e Kauã De Souza França
const ask = require("readline-sync")

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
            cadastrarDoador()
            break;
        case '2':
            listarDoadores()
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
            console.log("Opção inválida. Tente novamente.");
    }
}

function cadastrarDoador() {
    nome = ask.question("Digite o nome do doador: ");
    idade = ask.questionInt("Digite a idade do doador: ");
    peso = ask.questionFloat("Digite o peso do doador (kg): ");
    tipoSanguineo = ask.question("Digite o tipo sanguineo: ");
    dataUltimaDoacao = ask.question("Digite a data da ultima doacao (dd/mm/aaaa): ");
    console.clear()
    doadores.push({ nome, idade, peso, tipoSanguineo, dataUltimaDoacao });
    console.log("Doador cadastrado com sucesso!");
}



