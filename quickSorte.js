const data  = require('./data/books.json')

function getMenorValue(array, pivo) {
  let count = 0

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.preco < pivo.preco){
      count++;
    }
  }
  trocaLugar(array, array.indexOf(pivo), count);
  return array
}
console.log(getMenorValue(data, data[2]))

function trocaLugar(array, from, to) {
  const elementA = array[from]
  const elementB = array[to]

  array[from] = elementB
  array[to] = elementA

}

function quicSorting(arr) {
  return arr
}


// console.log(quicSorting(data))