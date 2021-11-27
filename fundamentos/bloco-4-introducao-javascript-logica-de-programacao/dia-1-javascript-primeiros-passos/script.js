// Variáveis

const myName = "Paula Ribeiro";
const birtyCity = "Ubá";
let birthYear = 1990;

birthYear = 2030;
//birtyCity = "Rio de Janeiro"; const não pode ser redeclarada

console.log(myName);
console.log(birtyCity);
console.log(birthYear);

// Tipos Prmitivos, Tipagem Dinâmica e Operações Aritméticas

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

let base = 5;
let altura = 8;

const area = base*altura;
console.log(area);

const perimetro = (2*base + 2*altura);
console.log(perimetro);

// condições If e Else

let nota = 40;

if(nota >= 80){
    console.log("Parabens, você foi aprovada(o)!")
} else if (nota < 80 && nota >= 60){
    console.log("Você está na nossa linha de espera")
} else {
    console.log ("Você foi reprovada(o)")
}

// operadores lógicos

let currentHour = 8;
let message = " ";

if( currentHour >= 22){
    message = "Não devemos comer nada, é hora de dormir";
} else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
} else if(currentHour > 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour > 11 && currentHour < 14){
    message = "Hora do almoço!!!";
} else {
    message = "Hmmm cheiro de café recém passado";
}

console.log(message);

let weekDay = "sexta";

if(weekDay == "segunda" || weekDay == "terça" || weekDay == "quarta" || weekDay == "quinta" || weekDay == "sexta"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else{
    console.log("FINALMENTE, descaço merecido UwU");
}

// Switch case

let situacao = "lista";

switch(situacao){
    case "aprovada":
        console.log("Parabéns");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    case "reprovada":
        console.log("Que pena, você foi reprovada");
        break;
    default:
        console.log("Sua situação não foi encontrada")

}