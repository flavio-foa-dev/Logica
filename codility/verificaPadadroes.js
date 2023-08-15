function verify(S){
  if(S.length === 1) return true
  ref = 2

 for (let i = 0; i < S.length; i++) {
  if(S[i] !== S[i +1]) {
    ref -= 1
  }
  else if (ref < 0) {
    break
  }
 }
 return ref < 0 ? false : true
}


console.log("true", verify("a"))
console.log("true", verify("b"))

console.log("true", verify("bbbaaa"))
console.log("true", verify("aaabbb"))

console.log("false", verify("aaabbba"))
console.log("false", verify("aaabbbaa"))
console.log("false", verify("aaabbabbaaabbbaaabb"))
console.log("false", verify("bbbaaab"))
console.log("false", verify("bbbaaabb"))
console.log("false", verify("bbbaaabbbbaaabbb"))




// console.log(2, verify("aaabbba"))
// console.log(3, verify("ab"))
// console.log(4, verify("aaa"))
// console.log(5, verify("b"))
// console.log(6, verify("abb"))
// console.log(7, verify("bbbaaa"))
// console.log(8, verify("bbbaaab"))





