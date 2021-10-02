const net = require('net');
const client = net.Socket();
const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.on('data', data => {
    console.log(`max number is ${data}`)
    process.exit()
});

client.connect(4000, 'localhost', () => {
    interface.question('Enter a comma separated list of numbers: ', input => {
        client.write(input);
    })
})
