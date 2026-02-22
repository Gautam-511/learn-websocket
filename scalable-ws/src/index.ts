import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();

const server = app.listen(3001, () => {
    console.log(`Server listening on http://localhost:3001`);
});

const wss = new WebSocketServer({server});

wss.on('connection', (ws) => {
    ws.on('error', console.error);
    console.log('new client connected');
    ws.send('welcome to websoctet server');

    ws.on('message', (data) => {
        console.log(`received: ${data.toString()}`);
        ws.send(`you sent: ${data.toString()}`);
    });
});