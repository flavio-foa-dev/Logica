var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('');

// encriptografa
let encodes =[]
const encode = (c) => {
  let b = c+12
  encodes.push(b)
}

lines.forEach((c) => {
  encode(c);
})
console.log("encode", encodes);

// desencriptografar

let decodes = [];
const decode = (c) => {
let a =c.split('');
decodes.push(a[0]);
}

// if(!encode){console.log("nâo existe encriptografias ")};

encodes.forEach((c) => {
  decode(c)
})

const result = decodes.join('');

console.log(result);