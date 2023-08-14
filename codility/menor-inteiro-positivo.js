/**
Escreva uma função:
função solução(A);
que, dada uma matriz A de N inteiros, retorna o menor inteiro positivo (maior que 0) que não ocorre em A.

Por exemplo, dado A = [1, 3, 6, 4, 1, 2], a função deve retornar 5.
Dado A = [1, 2, 3], a função deve retornar 4.
Dado A = [−1, −3], a função deve retornar 1.
Escreva um algoritmo eficiente para as seguintes suposições:
N é um número inteiro dentro do intervalo [ 1 .. 100.000 ];
cada elemento da matriz A é um inteiro dentro do intervalo [ −1.000.000 .. 1.000.000 ].
**/

// exemplo 1
function solution(A) {
  A.sort();
  let menorNumber = 0
  let menorNumeroUnico = 1
  for(let i = 0; i < A.length; i ++ ){
      if(A[menorNumber] > A[i]) {
        menorNumber = i
      }
  }
  for(let value of A){
    if(menorNumeroUnico === value){
      menorNumeroUnico += 1
    }
  }
  return menorNumeroUnico < 1 ?  menorNumeroUnico = 1 : menorNumeroUnico
}

// exemplo 2
function solutionn(A) {
  A.sort();
  let smallUniqueNumber = A[0]
  for(let value of A){
    if(smallUniqueNumber === value){
      smallUniqueNumber += 1
    }
  }
  return smallUniqueNumber < 1 ?  smallUniqueNumber = 1 : smallUniqueNumber
}

 console.log("solucao",solution([-1, -3]))
 console.log("solucao",solution([1, 3, 6, 4, 1, 2]))
 console.log("solucao" ,solution([1, 2, 3]))


 function findSmallestUniqueNumber(A) {
  A.sort((a, b) => a - b); // Classificar o array em ordem crescente

  let smallestUniqueNumber = 1;

  for (let value of A) {
    if (value === smallestUniqueNumber) {
      smallestUniqueNumber++;
    } else if (value > smallestUniqueNumber) {
      break; // Uma vez que o array está classificado, não precisamos continuar procurando
    }
  }

  return smallestUniqueNumber;
}

