/* 
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

//const { expect } = require('@jest/globals');
const { expect } = require('@jest/globals');
const sum = require('./sum.test.js');

describe('verificações da funcao sum()', () => {

  function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
    return a + b;
  }

  it('verify if return of sum(4,5) is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });


  it('verify if return of sum(0,0) is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('verify if throw erro is sum(4, "5")', () => {
    expect(() => { sum(4, "5").toThrow(); });
  });

  it('verify erro mensage is "parameters must be numbers"', () => {
    expect(() => { sum(4, "5").toThrowError(new Error('parameters must be numbers'))})
  })

}); 