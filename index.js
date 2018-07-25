const http = require('http');

const PORTONE = 7000;

const PORTTWO = 7500;

const serverOne = (request, response) => //arrow function, same as function (request, response)
    {
        
        response.end('You are the greatest!');
    }

const serverTwo = (request, response) => //arrow function, same as function (request, response)
    {
        
        response.end('You are the worst!');
    }

const server1 = http.createServer(serverOne);
const server2 = http.createServer(serverTwo);

server1.listen(PORTONE, function() {
    console.log('the server is listening on port ' + PORTONE);
});

server2.listen(PORTTWO, function() {
    console.log('the server is listening on port ' + PORTTWO);
});
