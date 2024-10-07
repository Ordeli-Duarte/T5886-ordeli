//Dupla: Ordeli Duarte Filho e Kauã De Souza França
const ask = require('readline-sync')

let nome
let idade
let peso
let tipoSanguineo
let ultimaDoacao

let doadores = []

function cadastrarDoador(){
    console.clear()
    nome = ask.question('Por favor, insira o nome do doador: ').toLowerCase()
    idade = parseFloat(ask.question('Por favor, insira a idade do doador: ').toLowerCase())
    peso = parseFloat(ask.question('por favor, insira o peso do doador em kg: '))
    tipoSanguineo = ask.question('Por favor, insira o tipo sanguíneo do doador: ').toLowerCase()
    dia = parseFloat(ask.question('Por favor, insira o dia da ultima doacao: '))
    mes = parseFloat(ask.question('Por favor, insira o mes da ultima doacao: '))
    ano = parseFloat(ask.question('Por favor, insira o ano da ultima doacao: '))

    ultimaDoacao = {
        dia,
        mes,
        ano
    }

    let doador = {
        nome,
        idade,
        peso,
        tipoSanguineo,
        ultimaDoacao
    }
    
    if(typeof nome === 'number'){
        console.log('nome invalido')
    }else if(typeof idade === 'string'){
        console.log('idade invalida')
    }else if(typeof peso === 'string'){
        console.log('peso invalido')
    }else if(typeof tipoSanguineo === 'number'){
        console.log('tipo sanguineo invalido')
    }else{
        doadores.push(doador)
    }
}

function listarDoadores(){
    console.clear()
    console.log('____________________________________________________________________________________________________________')
    console.log('Doadores atuais')
    console.log('____________________________________________________________________________________________________________')
    for (let a of doadores) {
        console.log(`Nome: ${a.nome}\nIdade: ${a.idade}\nPeso: ${a.peso}\nTipo sanguineo: ${a.tipoSanguineo}\nUltima doacao: ${a.ultimaDoacao.dia}/${a.ultimaDoacao.mes}/${a.ultimaDoacao.ano}\n____________________________________________________________________________________________________________\n`)
    }
    let z = ask.question('Pressione qualquer coisa para continuar: ')
}

function buscarPorTipoSanguineo(){
    console.clear()
    let auxiliar1 = ask.question('Digite o tipo de sangue que você deseja procurar: ').toLowerCase()
    for (let b of doadores) {
        if(auxiliar1 === b.tipoSanguineo){
            console.log(b)
        }else{
            console.log('Nenhum doador encontrado')
        }
    }
    let y = ask.question('Digite qualquer coisa para continuar: ')
}

function buscarPorUltimaDoacao(){
    console.clear()
    let auxiliar2 = ask.question('insira o dia: ')
    let auxiliar3 = ask.question('insira o mes: ')
    let auxiliar4 = ask.question('insira o ano: ')

    for (const c of doadores) {
        if(auxiliar2 > 31 && auxiliar2 < 0){
        }else if(c.ultimaDoacao.ano <= auxiliar4){
            console.log(c)
        }else if(c.ultimaDoacao.mes <= auxiliar3 && c.ultimaDoacao.dia <= auxiliar2 && c.ultimaDoacao.ano <= auxiliar4){
            console.log(c)
        }else if(c.ultimaDoacao.dia <= auxiliar2 && c.ultimaDoacao.mes <= auxiliar3 && c.ultimaDoacao.ano === auxiliar4){
            console.log(c)
        }else if(c.ultimaDoacao.dia <= auxiliar2 && c.ultimaDoacao.mes === auxiliar3 && c.ultimaDoacao.ano === auxiliar4){
            console.log(c)
        }else if(c.ultimaDoacao.dia === auxiliar2 && c.ultimaDoacao.mes <= auxiliar3 && c.ultimaDoacao.ano <= auxiliar4){
            console.log(c)
        }else{
            console.log('Nenhum doador encontrado')
        }
    }
    let x = ask.question('Digite qualquer coisa para continuar: ')
}

function principal(){
    console.clear()
    console.log('_______________________________________________________________________')
    console.log('[1] Cadastrar doador')
    console.log('[2] Listar doadores atuais')
    console.log('[3] Buscar doador por tipo sanguineo')
    console.log('[4] Buscar doador por data de doacao')
    console.log('[5] Sair')
    console.log('_______________________________________________________________________')
    console.log()
    let auxiliar5 = ask.question('Digite um dos numeros que estao acima: ')
    return Number(auxiliar5)
}

let ativoPrograma = true

while(ativoPrograma){
    console.clear()
    switch(principal()){
        case 1:
            cadastrarDoador()
            break
        case 2:
            listarDoadores()
            break
        case 3:
            buscarPorTipoSanguineo()
            break
        case 4:
            buscarPorUltimaDoacao()
            break
        case 5:
            ativoPrograma = false
            break
    }
}
