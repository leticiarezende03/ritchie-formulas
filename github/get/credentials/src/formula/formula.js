const clc = require("cli-color")


function Run(input1, input2, input3) {
    console.log("Hello World!")
    console.log(clc.green("You receive "+ input1 +" in text."));
}

const formula = Run
module.exports = formula
