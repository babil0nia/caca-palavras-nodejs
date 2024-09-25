let readline = require("readline-sync");

console.log(
  "No jogo existem palavras escondidas, digite as palavras a medida que for encontrando elas. "
);

let concat = ""; // formata a matriz com | entre as letras
var numAleatorio = 0;
var letrasAlfabeto = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"; // letras do alfabeto para preencher os espaços vazios
var palavra = "";

var matriz = [
  ["G", "A", "T", "O", " ", "C"], //Gato é a posição Zero 0 do Array - matriz[0].lenght = 6
  ["F", " ", " ", " ", " ", "E"],
  ["I", " ", " ", "C", " ", "L"],
  ["L", " ", " ", "A", " ", "U"],
  ["A", " ", "B", "S", " ", "L"],
  [" ", " ", "O", "C", " ", "A"],
  ["B", "A", "L", "A", " ", "R"],
  [" ", " ", "A", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  ["S", "O", "M", "B", "R", "A"],
];

let object = [ //array usado para armazenar as palavras certas da matriz 
  {
    nome: "SOMBRA", 
    acertei: false,
  },
  {
    nome: "GATO",
    acertei: false,
  },
  {
    nome: "FILA",
    acertei: false,
  },
  {
    nome: "BALA",
    acertei: false,
  },
  {
    nome: "CASCA",
    acertei: false,
  },
  {
    nome: "CELULAR",
    acertei: false,
  },
  {
    nome: "BOLA",
    acertei: false,
  },
];

function desenharTela(matriz) {
  for (let linhas = 0; linhas < matriz.length; linhas++) { // percorre todas as linhas da matriz
    
    concat = ""; // formata a matriz com | entre as letras
    for (let coluna = 0; coluna < matriz[linhas].length; coluna++) { // percorre todas as colunas da matriz dinamicamente
      
      if (matriz[linhas][coluna] == " ") { // verifica se o espaço está vazio na matriz
        
        numAleatorio = Math.floor(
          Math.random() * (letrasAlfabeto.length - 0) + 0
        ); // gera numeros aleatórios a partir do tamanho da string letrasAlfabeto
        matriz[linhas][coluna] = letrasAlfabeto[numAleatorio]; // preenche os espaços vazios com letras aleatórias
      }
      if (coluna == matriz[linhas].length - 1) { //verifica se o valor da variável coluna é o último index do array 
        concat += `| ${matriz[linhas][coluna]} |`; // formata a matriz com | na ultima coluna
      } else {
        concat += `| ${matriz[linhas][coluna]} `; // formata a matriz com | entre as letras
      }
    }
    console.log(concat);
  }
}

desenharTela(matriz); // chama a função para desenhar na tela 

function verificaPrimeiraExecucao(primeiraExecucao, matriz) {
  if (primeiraExecucao == true) { // executa a primeira vez jogando. (= true)
    continuar = readline.question("Deseja jogar ? sim ou nao ? ");
  } else {
    desenharTela(matriz); // executa sempre depois da primeira rodada. ( = false)
    continuar = readline.question(`Deseja continuar jogando ? sim ou nao ? `);
  }
  return continuar;
}

function verificaHorizontal(matriz) {
  for (let linhas = 0; linhas < matriz.length; linhas++) { // verifica horizontalmente as palavras existentes
    

    if (matriz[linhas].join("").includes(palavra)) { // o join junta o array em uma string e o includes verifica se a palavra está inclusa nessa string, exemplo: gatovc é o join e gato é a palavra que o includes verifica.
      
      console.log(`A palavra ${palavra} esta correta`); 
    }
  }
}

function verificaVertical(matriz) {
  for (let i = 0; i < matriz[0].length; i++) { // pega a primeira linha do array pra saber a quantidade de colunas
    
    var nomeColuna = "";
    for (let j = 0; j < matriz.length; j++) { // pega o numero total das linhas. 
      
      nomeColuna += matriz[j][i]; // colocando o "J" na frente faz com que ele percorra verticalmente as letras das colunas, pois o "J" está sendo incrementado fazendo com que aumente o primeiro valor de index da matriz. Ex: matriz[0][1] que é correspondente a letra "A".
    }
    if (nomeColuna.includes(palavra)) { // verifica se palavra está inclusa em nomeColuna.
      console.log(`A palavra ${palavra} esta correta`);
    }
  }
}

function verificarPalavra(matriz, object) { 
  palavra = readline.question("Digite a palavra que voce encontrou: ");
  palavra = palavra.toUpperCase(); // converte texto do usuário para maiúsculo

  let resultadoDaFuncao = verificaResposta(object); 

  if (resultadoDaFuncao == "palavra_encontrada") {
    verificaHorizontal(matriz);
    verificaVertical(matriz);
  } else if (resultadoDaFuncao == "palavra_incorreta") {
    console.log("Palavra incorreta! ");
  } else if (resultadoDaFuncao == "jogo_terminou"){
    console.log("Parabens voce ganhou! :) ");
    return "jogo_terminou"
  } else {
    console.log("Palavra ja encontrada! ");
  }
}

let tamanhoObjeto = object.length;

function verificaResposta(obj) { 
  let verificaAcertoRespota = '';
  for (var i = 0; i < obj.length; i++) { // percorre o tamanho de objeto.

    if (obj[i].acertei == false) { // verifica se a palavra já foi digitada ou não.
      if (obj[i].nome == palavra) { // verifica se a palavra digitada é uma palavra certa.

        tamanhoObjeto--; // decrementa a partir dos acertos de palavras.
        console.log(`Restam ${tamanhoObjeto} palavras`)
        if (tamanhoObjeto == 0) { // verifica se todas as palavras do objeto foram acertadas, eliminando uma a cada acerto.
          
          return "jogo_terminou" ; 
        } 
        obj[i].acertei = true; // muda o propriedade de acertei no objeto para true quando uma palavra certa é digitada.
        verificaAcertoRespota =  "palavra_encontrada"; // recebe palavra encontrada
      }
    } else {
      if (obj[i].nome == palavra) {// verifica se a palavra já foi digitada e acertada
        
        return "palavra_ja_digitada"; 
      }
    }
  }
  if(verificaAcertoRespota == 'palavra_encontrada'){ // compara se verificaAcertoRespota é igual a 'palavra_encontrada', caso seja, ele retorna o valor para 'palavra_encontrada'
    return verificaAcertoRespota;

  }else{
    return 'palavra_incorreta';

  }
}


let continuar = " ";
let primeiraExecucao = true;
while (continuar != "nao") { // enquanto o usuário digitar que quer jogar, ele percorre a primeiraExecucao.
  continuar = verificaPrimeiraExecucao(primeiraExecucao, matriz);
  primeiraExecucao = false; // a partir da segunda execução ele determina primeira execução como false.
  if (continuar == "nao") { // acaba o jogo quando o usuário digita não.
    console.log("Ate a Proxima! :) ");
    break; // para o loop quando o usuário decide parar de jogar.
  } else {
    let resultadoDoJogo = verificarPalavra(matriz, object); // resultadoDoJogo recebe verificarPalavra.
    if (resultadoDoJogo == "jogo_terminou"){ // compara resultaudoDoJogo com o retorno de verificarPalavra que é "jogo_terminou".
      break;// para o loop quando o usuário ganha.
    }
  }
}
