const run = require("./formula/formula")



const INPUT1 = process.env.ZIPCODE 

// Convert to Number
//const INPUT1number = parseFloat(INPUT1, 10)

// Conditions

const INPUT1Length = INPUT1.length

//Validation

const lengthValidation = (INPUT1Length === 8)

if (!lengthValidation) throw new Error('The ZipCode must have 8 numbers')


run(INPUT1)
