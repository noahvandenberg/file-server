const net = require("net");

// Create Connection
const client = net.createConnection({
  host: 'localhost',
  port: '6969'
});
client.setEncoding("utf8");

// Handle Connection
client.on( 'connect', () => {
  console.log('CONNECTED');

});

// Handle Incoming Data
client.on( 'data' , (message) => {
  console.log('Message from server: ', message)
  //count = 1
  //setInterval(() => {client.write('ANNOYING'),count++;},100)

});

// Handle Exit
client.on( 'end' , () => {
  client.write('DISCONNECTED')
});


// STDIN
process.stdin.on('data', function(message){
  client.write(`FROM CLIENT: ${message}`);
});


module.exports = {
  client
};
