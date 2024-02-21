function quitaCeros(numeros) {
    let sinCeros = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] != 0) {
            sinCeros.push(numeros[i]);
        }
    }
    return sinCeros;
}

module.exports = quitaCeros;