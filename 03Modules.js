//CommonJS - every file is a module by default
//Modules encaspulated code, share as less as possible
//a bit of different syntax with vanilla js but idea is same
// const secret = 'Super Secret'
// const vishal = 'vishal'
// const vzaldat = 'vzaldat'


// const sayHi = (name) =>{
//     console.log(`Hello there, ${name}`) //use of backticks here is important and not to forget
// }

const names = require('./04names.js')
const sayHi = require('./05utils.js')
// console.log(names) // Here encapsulation of the names are ensured

const vzaldatas = require("./06alternativeFlavor.js")
// console.log(vzaldatas)

require('./07mindGrenade.js')

// sayHi('vzal')
// sayHi(names.vishal)
// sayHi(names.vzaldat)