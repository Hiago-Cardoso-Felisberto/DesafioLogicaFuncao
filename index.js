function calculoVitorias_Derrotas(vitorias, derrotas){
    let media = vitorias - derrotas;
    return media;
}

function verificarNivel(nivel){
    switch(true){
        case (nivel <= 10) :
            return "Ferro";

        case (nivel > 10 && nivel <= 20) :
            return "Bronze";

        case (nivel >= 21 && nivel <= 50) :
            return "Prata";
        
        case (nivel >= 51 && nivel <= 80) :
            return "Ouro";

        case (nivel >= 81 && nivel <= 90) :
            return "Diamante";

        case (nivel >= 91 && nivel <= 100) :
            return "Lendário";
        
        default: return "Imortal";
    }
}

let vitoriasOuDerrotasTotais = calculoVitorias_Derrotas(101, 0);
let nivelFinal = verificarNivel(vitoriasOuDerrotasTotais);

if(vitoriasOuDerrotasTotais > 0){
    console.log(`O jogador tem um saldo de ${vitoriasOuDerrotasTotais} vitorias, e esta no nível ${nivelFinal}.`);
}
    else{
        console.log(`O jogador tem um saldo de ${vitoriasOuDerrotasTotais} derrotas, e esta no nível ${nivelFinal}.`);
     }