// esta es mi función que suma dos números
const sum = (a,b) => a + b;

const fromDollarToYen = mountInDollar => mountInDollar * 105.64;

const fromEuroToDollar = mountInEuro => mountInEuro * 1.21;

const fromYenToPound = mountInYen => mountInYen * 0.0068;



// solo un registro en consola para nosotros.
//console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};