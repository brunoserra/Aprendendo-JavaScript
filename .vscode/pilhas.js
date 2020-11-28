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


//parte do código que usa a pilha//
push(10);
push(20);
push(30);
push(40);
push(50);

console.log(elementos);

console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());