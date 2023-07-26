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
