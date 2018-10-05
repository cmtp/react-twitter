import React, { Component } from 'react';
import MessageList from '../MessageList/MessageList'

class Main extends Component{
    constructor() {
        super();
        this.state = {
            messages: [
                { text: 'Mensaje de prueba' },
                { text: 'texto de prueba' }
            ]
        }
    }
    render() {
        return <MessageList messages={this.state.messages} />
    }
}

export default Main;