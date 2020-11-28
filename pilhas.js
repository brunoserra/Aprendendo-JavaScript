//[]]seria um vetor
var elementos = [];
var topo = -1;
const maximo = 10;

//função push coloca os valore empilhados
function push(num) {
    if (topo < maximo) {
        topo = topo + 1;
        elementos[topo] = num;
    }
}

} else {
    console.log("Pilha esta cheia")
}
}