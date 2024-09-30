//Dupla: Ordeli Duarte Filho e Kauã De Souza França
const ask = require("readline-sync")

const doadores = []
let nome
let idade
let peso
let tipoSanguineo
let ultimaDoacao

function main() {
   console.log("===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====")
   console.log("_____________________________________________________")
   console.log("1. Cadastrar doador")
   console.log("2. Listar doadores")
   console.log("3. Buscar doador por tipo sanguíneo")
   console.log("4. Buscar doador por data da última doação")
   console.log("5. Sair")
   console.log("_____________________________________________________")
   return ask.question("Escolha uma opcao: ")
}

main()







function cadastrarDoadores() {
    nome = ask.question("Insira o nome do doador: ")
    idade = ask.question("Insira a idade do doador: ")
    peso = ask.question("Insira")
}