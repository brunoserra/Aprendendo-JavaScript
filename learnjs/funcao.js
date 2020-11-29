// funcao armazena bloco de codigos pode ser reutilziado
function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}
var resultadoSoma = soma(1, 2);
var resultadoNovo = soma(120, 200);
console.log(resultadoSoma);
console.log(resultadoNovo);