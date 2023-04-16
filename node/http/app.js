const http = require('http');

const server = http.createServer((req,res) => {
    
    if(req.url === '/') {
        res.write('This is hello world');
    }
    if(req.url === '/post') {
        res.write('This is a post endpoint');
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3,34,3]));
    }
    res.end();
}); 
server.listen(3000);
console.log('listening on 3000');