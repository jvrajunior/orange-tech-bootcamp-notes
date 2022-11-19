
function gets() {
    return 0;
}

function print(texto) {
    const num = texto;

    for (let i = 0; i <= 10; i++) {
        const resul = num * i;
        console.log(num + 'x' + i +' = ' + resul);  
    }
}

module.exports = { gets, print };