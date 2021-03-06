
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo

/* console.log(shipLength(ships[0]) // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1]) // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2]) // 'Yamato is 256 meters long' */

const shipLength = (arr) => {
  return arr.map(({name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`).forEach((elem) => console.log(elem));
};

shipLength(ships);

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.filter((book) => 
    book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.'
  )[0].name;
};

console.log(authorWith3DotsOnName());

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário

const expectedResult = false;

/* function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
} */

const verifyBrithYear = () => {
  const ages = [];
  books.forEach((book) => {
    ages.push(book.author.birthYear);
  });
  ages.sort((a, b) => a - b);
  const equalAges = ages.some((age, index, array) => (age === array[index + 1]));
  return equalAges;
};

console.log(verifyBrithYear());


