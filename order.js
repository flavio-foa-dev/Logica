let price = [25, 15, 30, 50,45,20, 3]


const lowerValue = (arr, index) => {
  let indexMenorValor = index
  for (let i = indexMenorValor; i < arr.length; i++) {
    if (arr[i] < arr[indexMenorValor]) {
      indexMenorValor = i
    }
  }


  return indexMenorValor
}

const biggerValue  = (arr, index) => {
  let indexMenorValor = index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[indexMenorValor]) {
      indexMenorValor = i
    }
  }
  return arr[indexMenorValor]
}

console.log("Menor Valor", lowerValue(price, 0));
console.log("Maior Valor", biggerValue(price, 0));
console.log("array", price)

price.forEach((_, indice) => {
  let menor = lowerValue(price, indice)

  let livroAtual = price[indice];
  let livroMenorPreco = price[menor];

  price[indice] = livroMenorPreco
  price[menor] = livroAtual
 })

 console.log(price)