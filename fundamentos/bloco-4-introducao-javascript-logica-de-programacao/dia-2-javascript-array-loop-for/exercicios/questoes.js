// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for(let number of numbers){
    console.log(number);
} */

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

let sum = 0;

for(let number of numbers){
     sum += number;
}

console.log(sum);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

let average = (sum / numbers.length);

console.log(average);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

if(average > 20){
    console.log("valor maior que 20");
} else{
    console.log("valor menor que 20");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o

let higherNumber = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > higherNumber){
        higherNumber = numbers[index];
    }
}
console.log(higherNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddNumbers = [];

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        oddNumbers.push(numbers[index]);
    }
}

console.log(oddNumbers.length);
console.log(oddNumbers);

if(oddNumbers.length === 0){
    console.log("nenhum valor ímpar encontrado");
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o

let smallNumber = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
    if(smallNumber > numbers[index]){
        smallNumber = numbers[index];
    }
}
console.log(smallNumber);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let arr = [];

for(let index = 1; index <= 25; index += 1){
    arr.push(index);
}

console.log(arr);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

let division;

for(let index = 0; index < arr.length; index += 1){
    division = (arr[index] / 2);
    console.log(division);
}