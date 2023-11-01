// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// We include fromEuroToDollar here as well because it needs to be exported



const fromDollarToYen = function (valueInDollar) {
    let dollarToEuro = valueInDollar * 0.93;    
    let valueInYen = dollarToEuro * 156.5;
    return valueInYen;
}



const fromYenToPound = function (valueInYen) {
    let yenToEuro = valueInYen * 0.006;
    let valueInPound = yenToEuro * 0.87;
    return Math.round(valueInPound*1000)/1000;

}






module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }