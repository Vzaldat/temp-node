const path = require('path') //platform specific details 

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt')//just takes in strings with /content/ in the first argument be careful

console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const abs = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(abs); //relative path use case this is
