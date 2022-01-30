/* test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
}); */

/* test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
}); */

/* test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
}); */

/* const asyncSum = require('./conteudo.js');

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});
 */

/* ---------------------------------------------------------------- */

/* const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('verifica a chamada da callback na função uppercase', (done) => {

  uppercase('hello', (str) => {
    try {
      expect(str).toEqual('HELLO');
      done();
    } catch (error) {
      done(error);
    }
  });
});

//console.log(uppercase('hello')); */

/* ---------------------------------------------------------------------- */

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio1.js");


describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {

    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      try {
        expect(error).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(error, result) {
      try {
        expect(result).toEqual(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});