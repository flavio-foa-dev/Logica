const price = [25, 15, 30, 50,45,20, 3]


const lowerValue = (arr, index) => {
  let indexMenorValor = index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[indexMenorValor]) {
      indexMenorValor = i
    }
  }

  console.log(`o menor valor e =`, arr[indexMenorValor])
}


const biggerValue  = (arr, index) => {
  let indexMenorValor = index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[indexMenorValor]) {
      indexMenorValor = i
    }
  }

  console.log(`o maior valor e =`, arr[indexMenorValor])
}

lowerValue(price, 0)
biggerValue(price, 0)
