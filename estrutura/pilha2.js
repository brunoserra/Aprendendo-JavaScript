//[]]seria um vetor//
//estrutura para pilha //
var elementos = [];
var topo = -1;
const maximo = 10;

//função push coloca os valore empilhados//
function push(num) {
    if (topo < maximo) {
        topo = topo + 1;
        elementos[topo] = num;
    } else { console.log("pilha esta cheia"); }
}

function vazia() {
    return topo = -1;

}

//retirada de elementos//
//!= refere-se a simbulo deferente//
//let é uma variavel local//
function pop() {
    if (topo != -1) {
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    } else { console.log("pilha vazia"); }
}
var numDe = 10;
var resto;
while (numDe != 0) {
    resto = parseInt(numDe % 2);
    push(resto);
    mumDe = parseInt(numDe / 2);
}


while (!estaVazia()) {
    console.log(pop());

}