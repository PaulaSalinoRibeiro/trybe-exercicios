function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.getElementById('days');
  for(let index = 0; index < dezDaysList.length; index += 1){
    let itens = document.createElement('li');
    itens.innerText = dezDaysList[index];
    itens.className = 'day'
    days.appendChild(itens);

    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
        itens.className = 'day holiday'
    } 

    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index]=== 25){
        itens.className = 'day friday'
    }
  }

  function holidayBtn (str){
    let btn = document.createElement('button');
    let divButton = document.querySelector('.buttons-container');
    divButton.appendChild(btn);
    btn.id = 'btn-holiday'
    btn.innerText = str
  }
  holidayBtn('Feriados')