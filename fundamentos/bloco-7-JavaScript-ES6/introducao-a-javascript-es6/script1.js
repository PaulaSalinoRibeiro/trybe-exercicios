/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  } */

  /* const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  } */


  /* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente. */
  
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const growingOrder = arr => {

    arr.sort( (a, b) => a - b);

    return arr;
  
  }

  console.log(growingOrder(oddsAndEvens));