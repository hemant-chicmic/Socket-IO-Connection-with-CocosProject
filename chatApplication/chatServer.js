


//  //  start learning from the below link
//  //  link from socket io docs =>  https://socket.io/docs/v4/tutorial/step-1


import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});
          






io.on('connection', (socket) => {
  console.log('A j client connected');

  socket.on('disconnect', () => {
      console.log('A j client disconnected');
  }); 

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});







server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});














