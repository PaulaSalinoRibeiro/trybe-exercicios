/*
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

const myFizzBuzz = require('./myFizzBuzz.js');

describe('', () => {

  it('verifired if myFizzBuzz(15) return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('verifired if myFizzBuzz(3) return fizz', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });

  it('verifired if myFizzBuzz(5) return buzz', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  it('verifired if myFizzBuzz(14) return 14', () => {
    expect(myFizzBuzz(14)).toBe(14);
  });

  it('verifired if myFizzBuzz("5") return false', () => {
    expect(myFizzBuzz("5")).toEqual(false);
  });

});