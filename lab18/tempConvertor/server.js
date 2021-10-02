const http = require('http');

const server = http.createServer((request,response) => {
    const params = new URL(request.url, 'http://localhost:8080/');
    const fahrenheit = parseFloat(params.searchParams.get('temp'));
    const celsius = (fahrenheit - 32) * (5/9);
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    response.write(
        `<!DOCTYPE html>
        <html>
        <head>
            <title>My Temperature Converter</title>
        </head>
        <body>
            <h1>${fahrenheit} F is ${celsius} in Celsius</h1>
        </body>
        `
    )

});

server.listen(8080);
console.log('server is listening on port 8080');