// forEach

/* const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
const convertToUpperCase = (name, posicao) => {
  names[posicao] = name.toUpperCase();
};
names.forEach(convertToUpperCase);
console.log(names); */

/* const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
const emailList = emailListInData.forEach(showEmailList);
console.log(emailList); */

// Find 

/* const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (number) => number % 15 === 0;
console.log(numbers.find(findDivisibleBy3And5)); */

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = (callback) => callback.length === 5;
console.log(names.find(findNameWithFiveLetters)); */

/* const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
function findMusic(id) {
  return musicas.find((musicas) => musicas.id === id);
};
console.log(findMusic('31031685')); */

// arr.some & arr.every

/* const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  return arr.some((name) => name === 'Ana');
}
console.log(hasName(names, 'Ana')); */

/* const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, minimumAge) => {
  return arr.every((arr) => arr.age >= minimumAge);
}
console.log(verifyAges(people, 18)); */

// Sort 

/* const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people.sort((a, b) => a.age - b.age);
console.log(people); */

/* const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people.sort((a, b) => b.age - a.age);
console.log(people); */