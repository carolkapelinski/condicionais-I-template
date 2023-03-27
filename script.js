// PRATICA GUIADA 1 -Crie duas variáveis booleanas, booleano1 e booleano2, 
// e atribua respectivamente os valores true e false
// Crie um if para verificar se booleano1 é true e exiba um alert caso positivo.
// Crie um else que exiba um alert caso não seja true.

const booleano1 = true
const booleano2 = false 

if(booleano1 === true){
    alert('booleano1 é igual a true')
} else{
    alert('booleano1 não é igual a true')
}


//PRATICA GUIADA 2 - Comente as condicionais anteriores
// Crie uma terceira variável chamada booleano3, com valor true
// Crie um if que verifica se booleano1 e booleano2 são iguais e exiba um alert caso positivo
// Crie um else if que verifica se booleano2 e booleano3 são iguais e exiba um alert caso positivo
// Crie mais um else if que verifica se booleano1 e booleano3 são iguais e exiba um alert.
// Crie um else que exiba um alert caso não existam valores iguais

const booleano3 = true 

if(booleano1 === booleano2){
    alert('booleano1 e booleano2 são iguais')
}else if(booleano2 === booleano3){
    alert('booleano2 e booleano3 são iguais')
}else if(booleano1 === booleano3){
    alert('booleano1 e booleano3 são iguais')
}else{
    alert('não existem valores iguais')
}


// Crie uma variável idade e atribua um valor a ela.
// Agora crie uma lógica com os requisitos abaixo:
//       Pode votar: pessoas com 18 anos ou mais
//      Não pode votar: pessoas menores de 18 anos
// Casos facultativos: 
//      Pessoas com idade entre 16 e 17 anos
//      Pessoas com 70 anos ou mais

const idade = 26 

if(idade >= 18){
    if(idade >=70){
        alert('Pode votar, mas é facultativo')
    }else {
        alert('Pode votar, é obrigatório')
    }

} else{
    
    if(idade >=16){
        alert('Pode votar, mas é facultativo')
    }else{
        alert('Não pode votar')
    }
}


//pra guardar na cabeça
// Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10
// Crie um if que verifica se a média é maior ou igual a 5. Caso seja,
//  imprima que a pessoa foi aprovada
// Adicione um else que imprime que a pessoa foi reprovada se a condição não for atendida
 
const media = 10

if(media >= 5){
    alert('APROVADA(O)')
    }else if(media >= 3){
        alert('RECUPERAÇÃO')
    }else if(media <3){
    alert('REPROVADA(O)')
    }else {
        alert('dados inválidos')
    }














































