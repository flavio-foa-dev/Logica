# Logica

- [moneyCounter](moneyCounter.js)
- [calc](calc.js)





Ao começarmos o estudo de algoritmos, é comum nos depararmos com a expressão Big O Notation (ou Notação “O Grande”).

Essa notação é utilizada para expressar a complexidade de um algoritmo, com relação ao tempo e volume de recursos computacionais necessários para executar esse algoritmo, de acordo com o volume de dados de entrada. Em geral, utiliza-se o tempo de uso de CPU (unidade central de processamento) do computador.

Ou seja, usamos O para classificar funções (implementações de algoritmos) de acordo com a forma como crescem em complexidade. Algoritmos diferentes podem crescer em complexidade da mesma forma, então podem ter a mesma classificação O, como vimos durante o curso com o Selection Sort e o Insertion Sort.

Podemos classificar os exemplos que vimos durante a aula da seguinte forma:

notação	nome
O(n)	linear
O(n²)	quadrático
A função menorValor() é um exemplo de algoritmo de crescimento linear: o “custo” (referente à quantidade total de operações necessárias) depende da quantidade de elementos na lista; uma lista de 10 elementos resulta em 10 operações de busca e uma lista de 1000 elementos resulta em 1000 operações. Ou seja, menorValor() tem complexidade de O(n), onde n é o tamanho (quantidade de elementos) da lista.

Já nas funções selectionSort() e insertionSort(), vimos que um laço de repetição dentro do outro faz com que a taxa de crescimento não aumenta mais de forma linear com relação à quantidade de elementos na lista, porém de forma quadrática, pois um laço dentro de outro significa que a quantidade de operações será de n*n (sendo n a quantidade de elementos). Ou seja, selectionSort() e insertionSort() têm complexidade de O(n²).

Como os exemplos que vimos na planilha e nos gráficos da aula, existem outras formas de avaliar o crescimento de um algoritmo, e que também podem ser representada segundo a notação O grande:

notação	nome
O(n)	linear
O(n²)	quadrático
O(1)	constante
O(log(n))	logarítmica
O(nc)	polinomial
O(cn)	exponencial
A notação O grande não é usada apenas em computação, mas também em várias áreas da matemática e existem outras notações na lista além dos exemplos que utilizamos.

Se quiser saber mais e ter outros exemplos de notações relacionadas a algoritmos comuns em programação, o site Big O cheatsheet (em inglês) fornece ótimo material para estudo.

Aplicamos novamente o paradigma “dividir para conquistar” para desenvolver o algoritmo de busca chamado busca binária;
Utilizamos recursão para manipular um array ordenado e buscar um elemento, seguindo o fluxo da busca binária que foi visto nas simulações e testes;
Desenvolvemos código em JavaScript para implementar o algoritmo de busca binária;
Continuamos a prática de funções recursivas, vendo o funcionamento do “caso base”, que pode ser considerada como a condição de parada de uma função recursiva.


Durante o desenvolvimento do código do quick sort, comentamos sobre o pior caso de execução de um algoritmo.

Em algoritmos, os termos melhor caso e pior caso se referem à quantidade de recursos a ser utilizado na execução, que pode ser tempo de execução ou memória.

Uma maneira adotada para mensurar a eficiência dos algoritmos, tendo em vista tempo de execução e espaço de memória, é por meio da notação Big O, que realiza a comparação desses dois parâmetros.

Lembrando que a notação Big O se refere a uma classificação de algoritmos de acordo com o tempo de execução, à medida em que aumenta a quantidade de dados a serem manipulados e a quantidade de memória exigida.

Dessa forma, teremos o melhor caso de algoritmo quando ele apresenta a mesma quantidade de tempo para executar, independente do tamanho da entrada. E um pior caso quando se tem um maior tempo de execução considerando todas as possíveis entradas.

Exemplo de Big O em algoritmos de ordenação:

Algoritmo	estrutura	Complex. tempo: melhor caso	Complex. tempo: pior caso	Complex. espaço: pior caso
Quick Sort	Array	O(n log(n))	O(n²)	O(n log(n))
Merge Sort	Array	O(n log(n))	O(n log(n))	O(n)
Heap Sort	Array	O(n log(n))	O(n log(n))	O(1)
Smooth Sort	Array	O(n)	O(n log(n))	O(1)
Bubble Sort	Array	O(n)	O(n²)	O(1)
Insertion Sort	Array	O(n)	O(n²)	O(1)
Selection Sort	Array	O(n²)	O(n²)	O(1)
Onde:

O(1): notação de Big O que representa um algoritmo que é executado em tempo constante.

O(n): algoritmo que é executado em tempo linear, ou seja, as execuções aumentam de acordo com as entradas - como a busca linear.

O(n log(n)): representa um algoritmo que reduz pela metade uma lista a cada vez que é executado - como o merge sort e o quick sort.

O(n²): algoritmo com o tempo quadrático que por sua vez, significa que assim que o número de elementos na entrada aumenta, as execuções aumentam quadraticamente. Por isso, devemos evitar códigos com essa notação de Big O, pois o número de operações aumenta significativamente a cada entrada - como o selection sort e o insertion sort.


PRÓXIMA ATIVIDADE

Em computação sempre é utilizado o logaritmo com base 2 (e, consequentemente, o inverso é a potência de 2). Assim, log n representa de forma abreviada log2 n, ou seja, log de n na base 2.

Esta característica está ligada ao sistema numérico utilizado pelos computadores: o sistema binário (ou de base 2), onde todos os valores são representados pelos números 0 e 1.

Assim, sempre que trabalharmos com valores O(log n), estamos nos referindo a base 2.
