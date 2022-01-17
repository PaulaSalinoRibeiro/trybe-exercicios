const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
 
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`
  
}

customerInfo(order)

const orderModifier = (order) => {
  
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const arrPizza = Object.keys(order.order.pizza);

  return `Olá ${order.name}, o total do seu pedido de ${arrPizza[0]} e ${arrPizza[1]} e ${order.order.drinks.coke.type} é R$${order.payment.total}`

}

orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const lessos2AND3 =  Object.assign({}, lesson2, lesson3);

const keyList = obj => {
  
  const arr = Object.keys(obj);
  for(const key of arr){
    console.log(key);
 }

}

const objLength = obj => Object.keys(obj).length;

const valueList = obj => {
  
  const arr = Object.values(obj);
  for(const key of arr){
    console.log(key);
 }

}

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});


const allStudent = obj => {

  const arr = Object.entries(obj);
  let sum = 0;

  for (const student of arr){
    sum += student[1].numeroEstudantes;
  }

  return sum;
}

console.log(allStudent(allLessons));
