// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  const joke = document.getElementById('jokeContainer');
  
  const response = fetch(API_URL, myObject)
                  .then((response) => response.json())
                  .then((data) => joke.innerText = data.joke)
                  .catch(error);
  //console.log(response);
};

window.onload = () => fetchJoke();