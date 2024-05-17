import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080/');

ws.on('error', console.error);

ws.on('open', () => {
  ws.send('Hello, I am the client!');
});

ws.on('message', (data) => {
  console.log('received: %s', data);
});
