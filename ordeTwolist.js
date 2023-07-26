const list1 = [3, 15, 25, 30, 45, 50, 55, ]
const list2 = [10, 20, 22, 28, 33, 35, 40, 98, 99 ]

let newList = new Array()


let lista = 0
let listb = 0
for (let i = 0; i < list1.length + list2.length; i++) {

  if(list2[listb] == undefined){
    list1[lista] &&
    newList.push(list1[lista])
    lista ++
  }

  if(list1[lista] == undefined){
    list2[listb] &&
    newList.push(list2[listb])
    lista ++
  }





  if (list1[lista] < list2[listb] || list1[listb] == undefined) {
    list1[lista] &&
    newList.push(list1[lista])
    lista ++
  }else{
    list2[listb] &&
    newList.push(list2[listb])
    listb ++
  }
}

console.log("Added final", newList)

