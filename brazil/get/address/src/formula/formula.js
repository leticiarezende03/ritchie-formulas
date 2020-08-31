const clc = require("cli-color")
const axios = require('axios')

function Run(INPUT1) {

    //API

    axios.get(`http://viacep.com.br/ws/${INPUT1}/json`)
        .then(response => {
            console.log(clc.white("Your Zipcode is " + clc.red(INPUT1) + " and the address for this Zipcode is: \n"), response.data);
        })
        .catch(error => {
            console.log(error);
        })
}

const formula = Run
module.exports = formula
