const net = require('net');
const client = new net.Socket();
const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.on('data', data => {
    console.log(`data: ${data}`);
    process.exit()
})

client.connect(4000, 'localhost', () => {
    interface.question('Enter a string to reverse: ', input => {
        client.write(input);
    }) 
})