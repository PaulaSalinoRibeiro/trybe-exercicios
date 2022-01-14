/*
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

const { expect, it } = require('@jest/globals');
const myRemove = require('./myRemove.js');

describe('verify function myRemove', () => {
  
  it('checked if myRemove([1, 2, 3, 4], 3) return array expected', () => {
    const arr = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(arr, 3));
  });

  it('checked if myRemove([1, 2, 3, 4], 3) not return [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).not.toEqual(myRemove(arr, 3));
  });

  it('checked if myRemove([1, 2, 3, 4], 5) return expected array [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4,];
    expect([1, 2, 3, 4]).toEqual(myRemove(arr, 5));
  })

}); 