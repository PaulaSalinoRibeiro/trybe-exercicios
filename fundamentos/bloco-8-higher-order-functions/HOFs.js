const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Separar pares dos impares;
const oddAndEven = arr.reduce((acc, number) => {
  if (number % 2 === 0 ) {
    acc.even.push(number);
    return acc;
  };
  acc.odd.push(number);

  return acc;
}, { odd: [], even: [] });
 //console.log(oddAndEven.even.map((element) => element * 2));
 console.log(oddAndEven);