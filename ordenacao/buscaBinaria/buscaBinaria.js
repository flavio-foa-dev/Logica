const data = require('../../data/booksOrdenado.json')
// console.log(data)

function getBinary(arr, de, ate, valor) {
  const MEIO = Math.floor((de + ate) / 2);
  const ATUAL = arr[MEIO]

  if (de > ate) {
    return -1
  }

  if(valor === ATUAL.preco) {
    return MEIO // returna posicao
    // return ATUAL // returna valor

  }

  if(valor < ATUAL.preco) {
    return getBinary(arr, de, MEIO -1, valor)
  }

  if(valor > ATUAL.preco) {
    return getBinary(arr, MEIO + 1, ate, valor)
  }
}
console.log(getBinary(data, 0, data.length-1, 5))
