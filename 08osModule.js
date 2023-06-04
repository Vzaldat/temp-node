//OS MODULE
//operating system and server interactions will be handled in this module

const os = require('os') // accessing those methods by os. since it is an object instance and we can carry out functions

const user = os.userInfo()

console.log(user)

//method returns the system uptime in seconds

// const time = os.uptime()
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs)