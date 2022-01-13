const verifyIsNumber = (value1, value2) => {

  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numericos');
  }
  
}

const sum = (value1, value2) => {

  try {

    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message
  }
}

//console.log(sum(2, '3'));

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
}

customer.lastName = 'Farta';
customer['adress'] = 'Rua torta n° 0';

//console.log(customer)

const verifyTypes = (obj, key, value) => {

  if(typeof obj !== 'object' || typeof key !== 'string'){
    throw new Error('Valores inválidos');
  }
}

const creatObj = (obj, key, value) => {

  try {
    verifyTypes(obj, key, value);
    obj[key] = value;
    return obj;

  } catch (erro) {
    throw erro.message
  }
  
}

let obj = {
  firstName: 'Paula',
}

//console.log(creatObj(obj, 'age', 31))

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for(let key in coolestTvShow){
  //console.log(key);
}

//console.log(Object.keys(coolestTvShow)); // Object.keys: utilizado para listar as chaves de um objeto retornando-as em um array

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = obj => {
  
  const arrSkills = Object.keys(obj);

  for(let index in arrSkills){
    
    console.log(`${arrSkills[index]}, Nível: ${obj[arrSkills[index]]}`)
  }

}

//skills(student2);
//skills(student1);
