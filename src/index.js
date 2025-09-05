const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
};

const player2 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,    
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result 

    switch (true) {
        case (random < 0.33):
            result = "Reta";
            break;
        case (random < 0.66):
            result = "Curva";
            break;
        default:
            result = "Confronto";           
    }

    return result;
};
async function mensagemResultado(characterName, block, diceResult, att) {
        console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${att} = ${diceResult + att}`);
};
async function playRaceEngine(character1, character2) {
    for (let i = 1; i <= 5; i++) {
        console.log(`🏁 Rodada ${i} `);

        //Sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
        
         //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "Reta") {
          totalTestSkill1 = diceResult1 + character1.velocidade;
          totalTestSkill2 = diceResult2 + character2.velocidade;
          await mensagemResultado(character2.nome,"velocidade" , diceResult1, character2.velocidade);
          await mensagemResultado(character1.nome, "velocidade", diceResult2, character1.velocidade);
        };
        if (block === "Curva") {
          totalTestSkill1 = diceResult1 + character1.manobrabilidade;
          totalTestSkill2 = diceResult2 + character2.manobrabilidade;
        await mensagemResultado(character1.nome, "manobrabilidade", diceResult1, character1.manobrabilidade);
          await mensagemResultado(character2.nome, "manobrabilidade", diceResult2, character2.manobrabilidade);

        };
        if (block === "Confronto") {
           let powerResult1 = diceResult1 + character1.poder;
           let powerResult2 = diceResult2 + character2.poder;

        };
    }
   
};

(async function main() {
    console.log(`🏁🚨Corrida entre ${player1.nome} e ${player2.nome} começando... \n`);
    await playRaceEngine(player1, player2);
})();

