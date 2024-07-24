// Variáveis
let nomeDoHeroi = "Quasar";
let xpHeroi = 1000; // Exemplo de XP do herói

// Lista de níveis disponíveis
let niveisDisponiveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina diamante", "Ascendente", "Imortal", "Radiante"];

// Função para determinar o nível com base no XP
function determinarNivel(xp) {
    if (xp >= 10001) {
        return niveisDisponiveis[7]; // "Radiante"
    } else if (xp >= 9001) {
        return niveisDisponiveis[6]; // "Imortal"
    } else if (xp >= 8001) {
        return niveisDisponiveis[5]; // "Ascendente"
    } else if (xp >= 7001) {
        return niveisDisponiveis[4]; // "Platina diamante"
    } else if (xp >= 5001) {
        return niveisDisponiveis[3]; // "Ouro"
    } else if (xp >= 2001) {
        return niveisDisponiveis[2]; // "Prata"
    } else if (xp >= 1001) {
        return niveisDisponiveis[1]; // "Bronze"
    } else {
        return niveisDisponiveis[0]; // "Ferro"
    }
}

// Determinando o nível atual
let nivelAtual = determinarNivel(xpHeroi);

// Exibindo a mensagem com o nível do herói
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelAtual);
