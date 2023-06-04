const { readFile, writeFile } = require('fs')
console.log('Start');
readFile('./content/first.txt', 'utf8', (err, res)=>{
    if (err ){
        console.log(err)
        return
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err1, res1) => {
        if(err1) {
            console.log(err1)
            return
        }
        const second = res1

        writeFile('./content/result-async.txt', 
        `Here is the result of async test: ${first}, ${second}`,
        { flag : 'a'},
        (err2, res2) => {
            if(err2) {
                console.log(err2)
                return
            }
            console.log(res2)
            console.log('this is done')
        }
        )
    })
}) // here you second argument is going be error checking with callback function

console.log('Next one')