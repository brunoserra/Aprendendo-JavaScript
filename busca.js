var valores = [10, 20, 30, 40, 50, 60];

function busca(num) {
    for (i = 0; i < 6; 1++) {
        if (num == valores[i]) {
            return i;
        }
    }
    return -1;
}

//usando a aplicãp//