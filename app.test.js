// import mi function sum

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app')

/*test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});*/

test('One dollar should be 105.64 yens', () => {
    
    const yens = fromDollarToYen(2);

    const expected = 2*105.64;

    
    expect(expected).toBe(yens);
});

test('One euro should be 1.21 dollars', () => {
    
    const dollars = fromEuroToDollar(2);

    const expected = 2*1.21;

    
    expect(expected).toBe(dollars);
});

test('One yen should be 0.0068 pounds', () => {
    
    const pounds = fromYenToPound(2);

    const expected = 2*0.0068;

    
    expect(expected).toBe(pounds);
});
