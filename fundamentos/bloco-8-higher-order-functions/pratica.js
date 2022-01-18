  const newPerson = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    
    return { nomeCompleto: fullName, email:`${email} @trybe.com`};
  };

  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

//console.log(newEmployees(newPerson));

const raflle = () => {
  let random =  ( Math.floor( Math.random() * 5) + 1 );
  return random;
}

const gambling = (num, raflle) => {
  if( num === raflle() ) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente'
};

console.log(gambling(5, raflle));