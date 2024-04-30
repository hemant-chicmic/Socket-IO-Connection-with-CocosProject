import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });

    // Handle custom events
    socket.on('chat message', (msg) => {
        console.log('Received message:', msg);
        io.emit('chat message', msg); // Broadcast the message to all clients
        console.log('Broadcasted message to all clients');
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
