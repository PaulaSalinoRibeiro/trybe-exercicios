- expect;

utilizada para dar acesso ao conjunto de **matchers**

- matchers;

são estruturas de comparação

  - toBe: testa **igualdade estrita**

  - toEqual: utilizado para testa a **igualdade de objetos, array e funções**


- tipos primitivos vs. referecias;

  tipos primitivos: **number, string, boolean**

    - a atribuição ocorre por valor;

  referencia: **objeto, array, função**

    - a atribuição ocorre por referencia;

- valores booleanos;

  `null` `undefined` `false` são valores falsy

- numeros;

  [https://jestjs.io/pt-BR/docs/using-matchers#n%C3%BAmeros]

- strings;

  [https://jestjs.io/pt-BR/docs/expect#tomatchregexporstring]

- arrays 

    - toContain: contem um item em particular
    - toContainEqual: verificar item que possui estrutura mais complexa
    - toHaveProperty: verificar o tamanho de um array ou string

  - objeto

    - toHaveProperty: possui propriedade especifica

  - exceções

    toThrow: usada para testa se uma função é capaz de lançar um erro 

  - not 

    permite testar algo oposto


  (Documetação)[https://jestjs.io/pt-BR/docs/expect]

  - describe

    bloco para agrupar testes;
    util para a organização;

    [https://jestjs.io/pt-BR/docs/api#describename-fn]