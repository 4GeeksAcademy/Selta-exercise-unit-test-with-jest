const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test ("1.07 dollar should should be 156.5 japan yen", function() {
    const {fromDollarToYen} = require ('./app.js');
    
    const yen = fromDollarToYen (3);
    
    const expected = 2.79*156.5;

    expect(fromDollarToYen(3)).toBe(436.635);


}) 

test ("156.5 yens should be 0.87 british pounds", function() {
    const {fromYenToPound} = require ('./app.js');
    
    const pound = fromYenToPound (10);

    const expected = 0.06 * 0.87;

    expect(fromYenToPound(10)).toBe(0.052);


})