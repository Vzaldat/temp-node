const {readFileSync, writeFileSync, read} = require('fs');
// const fs = require('fs'); Optional declaration

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag : 'a' }
) 

console.log('Done with file')
//output is the way you write in the second argument, this is for writing

