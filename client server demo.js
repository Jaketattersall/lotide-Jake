const net = require('net');
const PORT = 8081;

const myName = process.argv[2];

const configObj = {
	port: 14220, // 8.tcp.us-cal-1.ngrok.io:14220
	host: '8.tcp.us-cal-1.ngrok.io'
};

const client = net.createConnection(configObj);

client.setEncoding('utf8');

client.on('connect', function(){
	console.log('client is connected to server');
});

client.on('data', function(message){
	console.log(message);
});

process.stdin.on('data', function(typedInput){
	client.write(myName + ':' + typedInput);
});
