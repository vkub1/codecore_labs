const net = require('net');

const server = net.createServer(
    socket => {
        socket.on('data', data => {
            let dataString = data.toString();
            console.log(`received data ${dataString}`);
            let arr = dataString.split(',');
            let max = parseInt(arr[0]);
            arr.forEach(num => {
                if (max < num) {
                    max = num;
                }
            })
            console.log(`max of ${arr} is ${max}`);
            socket.write(max);
        })
    }
)

server.listen(4000);
console.log('Server listening on port 4000');