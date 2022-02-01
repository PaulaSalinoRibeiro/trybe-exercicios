const API_CRYPTO = 'https://api.coincap.io/v2/assets'
const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';  
const endpoint = '/currencies/usd.min.json';

const cryptos = async () => {
  try {
    const response = await fetch(API_CRYPTO);
    const coins = await response.json();
    const cryptoCoins = coins.data;
    // console.log(cryptoCoins);
    return cryptoCoins;

  } catch(error) {
    console.error(error);
  }
}

const curryceCoin = async () => {
  const url = baseUrl.concat(endpoint);
  try {
    const response = await fetch(url);
    const object = await response.json();
    const brl = object.usd.brl;
    // console.log(typeof brl);
    return brl;

  } catch(error) {
    console.error(error);
  }
}

const convertCoin = async () => {

  const crypt = await cryptos();
  // console.log(crypt);
  const currCoin = await curryceCoin();const convertCoin = async () => {

    const crypt = await cryptos();
    // console.log(crypt);
    const currCoin = await curryceCoin();
    // console.log(currCoin);
  
    const list = document.getElementById('coins');
    
    const first10Coins = crypt.filter((coin) => coin.rank <= 10)
    // console.log(first10Coins)
    first10Coins.forEach((coin) => {
      // console.log(typeof coin.priceUsd);
      const BRL = Number(coin.priceUsd) * currCoin;
      const item = document.createElement('li');
      item.innerText = `${coin.name} (${coin.symbol}): R$${BRL.toFixed(3)}`;
      list.appendChild(item);
    });
  } 
   
  window.onload = () => convertCoin();
  // console.log(currCoin);

  const list = document.getElementById('coins');
  
  const first10Coins = crypt.filter((coin) => coin.rank <= 10)
  // console.log(first10Coins)
  first10Coins.forEach((coin) => {
    // console.log(typeof coin.priceUsd);
    const BRL = Number(coin.priceUsd) * currCoin;
    const item = document.createElement('li');
    item.innerText = `${coin.name} (${coin.symbol}): R$${BRL.toFixed(3)}`;
    list.appendChild(item);
  });
} 
 
window.onload = () => convertCoin();


