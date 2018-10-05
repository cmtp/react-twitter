import React, { Component } from "react";
import MessageList from "../MessageList/MessageList";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          text: "Mensaje de prueba",
          picture: "https://randomuser.me/api/portraits/men/16.jpg",
          displayName: "Christian Tola",
          username: "ctola",
          date: Date.now() - 180000
        },
        {
          text: "Este es un nuevo mensaje",
          picture: "https://randomuser.me/api/portraits/men/16.jpg",
          displayName: "Christian Tola",
          username: "ctola",
          date: Date.now() - 1800000
        }
      ]
    };
  }
  render() {
    return <MessageList messages={this.state.messages} />;
  }
}

export default Main;
