let nomeHeroi = "Quasar"
let quantidadeDeVitória = 85
let quantidadeDeDerrota = 4
let saldoDeRankeadas = quantidadeDeVitória - quantidadeDeDerrota

let niveisDisponiveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

function classificarHeroi (saldo){
    
    if (saldoDeRankeadas >= 101){
        return niveisDisponiveis[6] //importal
    }
    else if (saldoDeRankeadas >= 91){
        return niveisDisponiveis[5] //Lendário
    }
    else if (saldoDeRankeadas >= 81){
        return niveisDisponiveis[4] // Diamante 
    }
    else if (saldoDeRankeadas >= 51){
        return niveisDisponiveis[3] //Ouro
    }
    else if (saldoDeRankeadas >= 21){
        return niveisDisponiveis[2] //Prata
    } 
    else if (saldoDeRankeadas >= 11){
        return niveisDisponiveis[1] //Bronze
    }
    else saldoDeRankeadas <= 10
        {return niveisDisponiveis[0] //Ferro
    }
}

let nivelDoHeroi = classificarHeroi(saldoDeRankeadas)

console.log("O heroi " + nomeHeroi + " tem o saldo de " + saldoDeRankeadas + " vitórias rankeadas e está no nivel " + nivelDoHeroi )
