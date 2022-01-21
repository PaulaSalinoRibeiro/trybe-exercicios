// const numbers = [32, 15, 3, 2, -5, 56, 10];

/* const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113 */

/* const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113 */

/* const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

let bigNumber = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > bigNumber) {
    bigNumber = numbers[i];
  };
}; */
//console.log(bigNumber);

//const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

/* const evenNumbers = numbers.filter((num) => num % 2 === 0);

const sum = evenNumbers.reduce((acc, num) => acc + num);

console.log(sum); */

/* const sum = (acc, num) => ((num % 2 === 0) ? acc + num : acc );

const sumEven = numbers.reduce(sum, 0);

console.log(sumEven); */




