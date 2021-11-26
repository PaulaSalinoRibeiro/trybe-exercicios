// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "BISPO";

switch(peca.toLowerCase()){
    case "cavalo":
        console.log("em L");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    case "rainha":
        console.log("qualquer direção");
        break;
    case "torre":
        console.log("quantas casa quiser na vertical e horizontal");
        break;
    case "peao":
        console.log("uma casa para frente");
        break;
    case "rei":
        console.log("uma casa em qualquer direção");
        break;
    defaul:
        console.log("erro");

}