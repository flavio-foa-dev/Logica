const calc = {
  sum: sum = (a,b)=> a * b,
  add: add = (a,b)=> a + b,
  sub: sub = (a,b)=> a - b,
  div: div = (a,b)=> a / b

}
const values = Object.keys(calc)
console.log(values)

const result = Math.floor(Math.random() * values.length)
console.log(result, values[result])

console.log(calc[values[result]](10,5));