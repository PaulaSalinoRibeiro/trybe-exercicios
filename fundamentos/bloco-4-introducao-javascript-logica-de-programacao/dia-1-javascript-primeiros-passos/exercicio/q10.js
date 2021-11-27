// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const valorCusto = -45;
const valorVenda = 135;

let valorCustoTotal = (valorCusto + 0.2*valorCusto);
//console.log(valorCustoTotal);

let lucro = (valorVenda - valorCustoTotal);
//console.log(lucro);

if( valorCusto < 0 || valorVenda < 0){
    console.log("erro");
} else{
    console.log(1000*lucro);
}
