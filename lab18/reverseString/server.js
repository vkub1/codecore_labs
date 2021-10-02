const net = require('net');

const server = net.createServer(
    socket => {
       socket.on('data', data => {
            const stringData = data.toString();
            console.log(`received the string ${stringData} from client`);
            const reversedString  = stringData.split("").reverse().join("");
            console.log(`reversed string ${reversedString}`)
            socket.write(reversedString)
       }) 
    }
);

server.listen(4000)
console.log("server listening on port 4000");