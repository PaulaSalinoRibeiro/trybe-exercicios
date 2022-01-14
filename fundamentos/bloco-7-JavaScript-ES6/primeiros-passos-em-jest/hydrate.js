
const hydrate = (str) => {

  let numb = str.match(/\d+/g).map(Number);
  let count = 0;

  for(let num of numb){
    count += num;
  }
  if(count > 1) {
    return `${count} copos de água`
  }
  return `${count} copo de água`
}


module.exports = hydrate;