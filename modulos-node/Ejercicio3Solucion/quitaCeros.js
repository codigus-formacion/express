import lodash from 'lodash';
function quitaCeros(numeros) {
    return lodash.without(numeros, 0);
}

export default quitaCeros;