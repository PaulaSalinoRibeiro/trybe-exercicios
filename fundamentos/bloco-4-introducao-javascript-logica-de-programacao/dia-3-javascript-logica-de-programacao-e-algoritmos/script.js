/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

/* let n = 3;
let asterisco = '*';
let string = ''; 

for(let index = 1; index <= n; index += 1){
  string += asterisco;
}

for(let index = 1; index <= n; index += 1){
    console.log(string);
} */

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

/* let n = 5;
let asterisco = '*';
let string = ''; 

   for(let index = 1; index <= n; index += 1){
    string += asterisco;
    console.log(string);
   } */

// 3- Agora inverta o lado do triângulo.

// 4- Depois, faça uma pirâmide com n asteriscos de base

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar.

// 6- Faça um programa que diz se um número definido numa variável é primo ou não;

// você vai precisar de fazer um loop que vá de 0 ao número definido
// além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let number = 50;
let arrNumbersPrime = [];

for(let index = 0; index <= number; index += 1){
    if(index % 2 !== 0){
        arrNumbersPrime.push(index);
    }
}

for(let index = 0; index < arrNumbersPrime.length; index += 1){
    if(arrNumbersPrime[index] === number){
        console.log("Is prime number")
    }
}

