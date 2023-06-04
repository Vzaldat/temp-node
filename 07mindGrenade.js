const num1 = 5;

const num2 = 10;

function addValues() {
    console.log(`the sume is : ${num1 + num2}`)
}
addValues() // Here although it wasnt exported it was called in this module and thus it printed in the console
// module.exports = addValues