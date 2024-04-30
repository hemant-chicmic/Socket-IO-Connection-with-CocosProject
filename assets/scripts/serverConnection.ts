import { _decorator, Component, EditBox, EditBoxComponent, instantiate, Label, Node, Prefab, randomRangeInt, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

import io  from 'socket.io-client/dist/socket.io.js';

@ccclass('serverConnection')
export class serverConnection extends Component {




    @property({type : Prefab})
    msgPrefab : Prefab | null = null ;
    
    @property({type :Node})
    contentNode: Node | null = null;

    @property( {type : EditBoxComponent} )
    editBox : EditBoxComponent | null = null ;

    private socket: any;




    start() {
        console.log('Socket IO => ');


        // // //  it is just a simple server to establis the connection only
        // // // connection establish confirmation will in the server console
        // // //
        // // // please first run the server placed in the same main directory
        // // // with folder name  'serverSocket' first run the file
        // // // placed here with named 'server' then run the cocos(client) code
        // // // in browser using editor
        //
        // this.socket = io('ws://localhost:8080', { transports: ['websocket'] });


        



        // // //  the below code is for multiple user chat application
        // // //  it uses the chatServer placed in the charApplicarion folder inside this cocos Project
        // // // first erun the chatServer then open html and cocos project 
        // // //  link from socket io docs =>  https://socket.io/docs/v4/tutorial/step-1
        // // //
        // // //
        this.editBox.node.on('editing-did-ended', this.userInputMessage, this);


        this.socket = io('ws://localhost:3000', { transports: ['websocket'] });
        this.socket.on('chat message', (message) => {
            console.log('In Cocos , Message:', message);
            this.displayMessage(message);
        });

    }

    userInputMessage()
    {
        let userInput = this.editBox.string ;
        console.log('In Cocos , user input :', userInput);
        this.socket.emit('chat message', userInput );
        this.editBox.string = '' ;
    }

    displayMessage(message: string) {
        const newMessageNode = instantiate(this.msgPrefab);
        newMessageNode.getChildByName('newMessage').getComponent(Label).string = message ;
        newMessageNode.parent = this.contentNode;
    }






    update(deltaTime: number) {
        // Add any necessary update logic here
    }







}












