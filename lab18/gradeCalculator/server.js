const http = require('http');

function calculateGrade(percent) {
    if (percent > 100) {
        return "Please enter a valid percentage!"
    } else if (percent >= 86) {
        return 'A';
    } else if (percent < 86 && percent >= 73 ){
        return "B";
    } else if (percent < 73 && percent >= 67) {
        return 'C+';
    } else if (percent < 67 && percent >= 60) {
        return 'C';
    } else if (percent < 60 && percent >= 50) {
        return 'C-';
    } else if (percent < 50 && percent >=0) {
        return 'F';
    } else {
        return "Please enter a valid percentage!";
    }
}

const server = http.createServer((request, response) => {
    const params = new URL(request.url, 'http://localhost:8080/');
    const percent = parseFloat(params.searchParams.get('grade'));
    const grade = calculateGrade(percent);
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    response.write(
        `<!DOCTYPE html>
        <html>
        <head>
            <title>Grade Calculator</title>
        </head>
        <body>
            <h1>You entered a percentage of ${percent} is a grade of: ${grade}</h1>
        </body>
        </html>`
    )
})

server.listen(8080);
console.log("Server listening on port 8080");