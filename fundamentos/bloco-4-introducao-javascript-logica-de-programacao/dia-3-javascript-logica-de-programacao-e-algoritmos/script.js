/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

let n = 3;
let asterisco = '*';
let string = ''; 

for(let index = 1; index <= n; index += 1){
  string = string + asterisco;
}

for(let index = 1; index <= n; index += 1){
    console.log(string);
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.




// 3- Agora inverta o lado do triângulo.

// 4- Depois, faça uma pirâmide com n asteriscos de base