// 1- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

    function isPalindrome(str){

        let arr = str.split(''); 
        let reverse = str.split('').reverse();
        
        if(arr.join() === reverse.join()){
            return true;
        }else{
            return false;
        }  
    }    

// 2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor

    function maxValue (arr){

        let value = arr[0];
        for(let index = 0; index < arr.length; index += 1){
            if(arr[index] > value){
                value = arr[index];
            }
        }
        return arr.indexOf(value);
    }
    
// 3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

    function minValue (arr){
        let value = arr[0];
        for(let index = 0; index < arr.length; index += 1){
            if(arr[index] < value){
                value = arr[index];
            }
        }
        
        return arr.indexOf(value);
    }

// 4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    function biggestName (arr){
        let bigName = arr[0];
        for(let name of arr){
            if(name.length > bigName.length){
                bigName = name;
            }
        } 
        return bigName;
    }   
    
    let arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
   
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete


// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N

    function sumOfN (n){
        let sum = 0;
        for(let index = 0; index <= n; index += 1){
            sum += index;
        }
        return sum;
    }

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word 
