const http = require('http');

const server = http.createServer((req, res) => { // request, response
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('Here is a short history lmao')
    }
    res.end(`
    <h1> Oops! </h1>
    <p>We can't seem to find the page you are looking for <p>
    <a href = '/'>Redirect</a>
    `)
})

server.listen(5000);
