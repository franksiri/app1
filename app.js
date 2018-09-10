const http = require('http');
const os = require('os');

console.log("Frank's web server starting...");

var handler = function(request, response) {  
    console.log("Received request from " + request.connection.remoteAddress);
      response.writeHead(200);  
      response.end("Hi there, You've hit " + os.hostname() 
      + ", on " + new Date +  "\n");
};

var www = http.createServer(handler);

var portNumber = 8080;
www.listen(portNumber);

console.log("Frank's web server listening on ..." + portNumber);