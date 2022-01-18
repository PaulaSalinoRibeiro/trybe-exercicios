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

//console.log(gambling(5, raflle));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  
  if ( RIGHT_ANSWERS === STUDENT_ANSWERS ) {
    return 1;
  };

  if ( STUDENT_ANSWERS === 'N.A') {
    return 0;
  };

  return 0.5;
};

const score = ( RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers) => {
  let count = 0;

  for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
    const answer = checkAnswers(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
    count += answer;
  };

  return count; 
};

//console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
