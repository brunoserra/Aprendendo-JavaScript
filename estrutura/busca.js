var valores = [15, 25, 35, 42, 60, 11];

function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num == valores[i]) {
            return i;
        }
    }
    return -1;

}

//usando a aplicãp
console.log(busca(10));
console.log(busca(60));