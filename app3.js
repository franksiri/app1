const http = require('http')
const os = require('os')

console.log('My original web server starting...')

var handler = function (request, response) {
  console.log('Received request from ' + request.connection.remoteAddress)
  response.writeHead(200)
  response.end("Nice work! You succeeded in hitting... " + os.hostname()
    + ', on ' + new Date + '\n')
}

var www = http.createServer(handler)

var portNumber = 8080
www.listen(portNumber)

console.log('My web server listening on ...' + portNumber)
