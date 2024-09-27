// Instruções para entrega
// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let hero= [nome = "cadu", xp = 9500];
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

switch (true){
    case (xp < 1000):
        console.log(`O Herói de nome ${hero[0]} está no nível de ${nivel[0]}.`)
        break;
    
    case (xp > 1000 && xp < 2001):
        console.log(`O Herói de nome ${hero[0]} está no nível de ${nivel[1]}.`)
        break;

    case (xp > 2000 && xp < 5001):
        console.log(`O Herói de nome ${hero[0]} está no nível de ${nivel[2]}.`)
        break;

    case (xp > 5000 && xp < 7001):
        console.log(`O Herói de nome ${hero[0]} está no nível de ${nivel[3]}.`)
        break;
    
    case (xp > 7000 && xp < 8001):
        console.log(`O Herói de nome ${hero[0]} está no nível de ${nivel[4]}.`)
        break;

    case (xp > 8000 && xp < 9001):
        console.log(`O Herói de nome ${hero[0]} está no nível de ${nivel[5]}.`)
        break;

    case (xp > 9000 && xp < 10001):
        console.log(`O Herói de nome ${hero[0]} está no nível de ${nivel[6]}.`)
        break;

    case (xp >= 10001):
        console.log(`O Herói de nome ${hero[0]} está no nível de ${nivel[7]}.`)
        break;

    default:
        console.log(`O Herói de nome ${hero[0]} está fora dos registros de xp.`)
}

