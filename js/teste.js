var texto = "Na primeira linha do código foi feita a declaração da variável array com os elementos necessários. A seguir, declaramos uma função callback, chamada buscarNumerosPares, que recebe cada elemento da array e faz um teste para identificar os números pares."
var contaChar = "s"


var txtArray = [...texto];
var retorno = txtArray.filter(achaCaracter => achaCaracter == contaChar);
console.log(retorno.length);
