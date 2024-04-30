import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

import io  from 'socket.io-client/dist/socket.io.js';

@ccclass('serverConnection')
export class serverConnection extends Component {

    start() {
        console.log('Socket IO => ');

        // // please first run the server placed in the same main directory
        // // with folder name  'serverSocket' first run the file
        // // placed here with named 'server' then run the cocos(client) code
        // // in browser using editor
        const socket = io('ws://localhost:8080', { transports: ['websocket'] });



        // socket.on('chat message', (message) => {
        //     console.log('in client Received message:', message);
        // });


    }

    update(deltaTime: number) {
        // Add any necessary update logic here
    }
}
