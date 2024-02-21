var lodash = require('lodash');
function quitaCeros(numeros) {
    return lodash.without(numeros, 0);
}

module.exports = quitaCeros;