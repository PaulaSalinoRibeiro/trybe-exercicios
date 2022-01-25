const wakeUp = () => 'Acordando!!';

const takeCofee = () => 'Bora tomar café!!';

const goToSleep = () => 'Partiu dormir!!';

const doingThings = (callback) =>  callback();

//console.log(doingThings(goToSleep));
//console.log(doingThings(wakeUp));
//console.log(doingThings(takeCofee));

const sayHello = function() {
  return function() {
     console.log("Hello!");
  }
}
const myFunc = sayHello();
//myFunc(); // return Hello!

//sayHello()(); // return Hello!

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  let name = prompt('Please enter your name.'); // diferença entre prompt e alert?
  callback(name);
}

processUserInput(greeting);

