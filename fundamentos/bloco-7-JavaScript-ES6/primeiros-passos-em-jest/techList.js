
const techList = (arr, str) => {

  const techs = arr.sort();
  const newArr = [];

  if(arr.length === 0){
    return "Vazio!"
  }

  for(let tech of techs){
    newArr.push({
      tech: tech,
      name: str
    })
  }

  return newArr;
}

module.exports = techList;