const listA = [20, 23, 28, 33, 35, 40, 46]
const listB = [10, 21, 22, 28, 34, 37, 44, 98, 99, 3 ]



function mergeSort(arr) {
  if (arr.length > 1){
    const meio = Math.floor(arr.length / 2)
    const partA = mergeSort(arr.slice(0, meio))
    const partB = mergeSort(arr.slice(meio, arr.length))
    arr = orderByArr(partA, partB)
  }


  return arr
}

function orderByArr(a, b) {
  let indexA = 0
  let indexB = 0
  const result = new Array()

  while (indexA < a.length && indexB < b.length) {
    let partA = a[indexA]
    let partB = b[indexB]

    if (partA < partB) {
      result.push(partA)
      indexA ++
    } else {
      result.push(partB)
      indexB ++
    }
  }
  return result.concat(indexA < a.length
    ? a.slice(indexA)
    : b.slice(indexB))

}

console.log(mergeSort(listB))

