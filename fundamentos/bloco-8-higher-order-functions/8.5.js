/* // Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pão', 'queijo', 'agua'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
}; */

// console.log(fruitSalad(specialFruit, additionalItens));

/* const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userAndjobInfod = {
  ...user,
  ...jobInfos,
};

//console.log(userAndjobInfod);

const {name, age, nationality, profession, squad, squadInitials} = userAndjobInfod; */

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my sqaud is ${squadInitials}-${squad}`);

/* const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao)); // undefined */

/* let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // gato água arroz

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz, gato, água */


/* let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); */

/* const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

const position2d = [1.0, 2.0];
const [x, y, z = 0, w = 1] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
console.log(w); // 1 */

/* const getNationality = ({ firstName, nationality = 'Brasilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); */

/* const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542)); */

/* const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined! */

/* const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário! */
/* 
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário! */

/* const multiply = (number, value = 1) => {
 return number * value; 
}

console.log(multiply(8)); */