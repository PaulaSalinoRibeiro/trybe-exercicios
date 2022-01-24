
const states = [
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goías' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraíma' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' },
];

const regions = [
  { sigla: 'S', name: 'Sul' },
  { sigla: 'SE', name: 'Sudeste' },
  { sigla: 'N', name: 'Norte' },
  { sigla: 'NE', name: 'Nordeste' },
  { sigla: 'CO', name: 'Centro-Oeste' },
]

const cities = [
  {name: 'Arroio dos Ratos', uf: 'RS', region: 'S'},
  {name: 'Trombudo Central', uf: 'SC', region: 'S'},
  {name: 'Flor do Sertão', uf: 'SC', region: 'S'},
  {name: 'Cidade de Espumoso', uf: 'RS', region: 'S'},
  {name: 'Ampére', uf: 'PR', region: 'S'},
  {name: 'Passa Tempo', uf: 'MG', region: 'SE'},
  {name: 'Solidão', uf: 'PE', region: 'NE'},
  {name: 'Ponto Chique', uf: 'MG', region: 'SE'},
  {name: 'Passa e Fica', uf: 'RN', region: 'NE'},
  {name: 'Feliz Natal', uf: 'MT', region: 'CO'},
  {name: 'Fruta de Leite', uf: 'MG', region: 'SE'},
  {name: 'Gado Bravo', uf: 'PB', region: 'NE'},
  {name: 'Baía da Traição', uf: 'PB', region: 'NE'},
  {name: 'Xique-Xique', uf: 'BA', region: 'NE'},
  {name: 'Venha-Ver', uf: 'RN', region: 'NE'}
]

const cityNE = (city) => city.region === 'NE';
const citiesNE = cities.filter(cityNE);

const citiesNEFormatted = citiesNE.map((city) => {
  const estado = states.find((state) => state.sigla === city.uf);
  const regiao = regions.find((region) => region.sigla === city.region);
  return `${city.name} pertence ao estado ${estado.nome}, que fica na região ${regiao.name}`;
});
console.log(citiesNEFormatted);

// const newArray = [];
// for (let index = 0; index < citiesNE.length; index += 1) {
//   const estado = citiesNE[index].uf;
//   let nomeEstado = '';
//   for (let outroindex = 0; outroindex < states.length; outroindex += 1) {
//     if (states[outroindex].sigla == estado) {
//       nomeEstado = states[outroindex].nome;
//       break;
//     }
//   }

//   newArray.push(`${citiesNE[index].name} pertence ao estado ${nomeEstado}`);
// }
// console.log(newArray);