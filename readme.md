## Funcionalidade:
Gerar palavras aleatórias dentro de um tabuleiro pré-determinado, permitindo que o usuário insira a palavra encontrada para confirmar se a palavra está certa e questiona a cada rodada se o usuário quer permanecer jogando ou não.

## Como executar o código:
Clonar o repositório e como o "node cacapalavras.js" e executar no terminal.

## Como testar:
Interagindo com o código a medida que as perguntas e desafio do caça-palavras é feito.

## Metodologia 
Criamos uma matriz, pre-determinamos algumas palavras nos indexs da matriz, preenchemos os espaços vazios com letras aleatórias, percorremos as linhas e colunas verificando as palavras corretas ou inválidas. Não percorremos a matriz diagonalmente.

## Lógica de programação: 
matriz - usada para gerar linhas e colunas através de um array bidimensional.
for - usado para percorrer as linhas e colunas através do tamanho da matriz.
if/else - usado para compara as condições e respostas fornecidas ao usuário.
while - usado para percorrer loops de acordo com as respostas do usuário.
function - usada para organiozação do código.
object - usado para armazenar as palavras corretas da matriz.
return - usado para retornar os dados dentro de uma função.
