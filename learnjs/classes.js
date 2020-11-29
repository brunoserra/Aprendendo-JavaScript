//vendo classes
// comum em orientação ao objetos
class Matematica {
    soma(valorA, ValorB) {
        return valorA + ValorB;

    }
    subtração(valorA, valorB) {
        return valorA - valorB;
    }
}
// criar instancia da class
var instanciaMatematica = new Matematica();
var resultado = instanciaMatematica.soma(10, 35);

console.log(resultado);