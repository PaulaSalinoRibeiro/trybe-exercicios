/*
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

const { it, expect } = require('@jest/globals');
const myRemove = require('./myRemove.js');

describe('verify function myRemove', () => {
  
  it('verified if myRemove([1, 2, 3, 4], 3) return array expected', () => {
    const arr = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(arr, 3));
  });

}); 