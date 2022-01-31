
const API_CRYPTO = 'https://api.coincap.io/v2/assets'

const cryptos = async () => {

  try {
    const response = await fetch(API_CRYPTO);
    const coins = await response.json();
    // console.log(coins.data);
    coins.data.forEach(coin => {
      const list = document.getElementById('coins');
      const item = document.createElement('li');
      item.innerText = ` ${coin.id} (${coin.symbol}): ${coin.priceUsd}`
      list.appendChild(item); 
    });
  } catch(error) {
    console.error(error);
  }
}

window.onload = () => cryptos();