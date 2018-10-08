import React, { Component } from "react";
import MessageList from "../MessageList/MessageList";
import InputText from "../InputText/InputText";
import ProfileBar from "../ProfileBar/ProfileBar";
import uuid from "uuid";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      openText: false,
      messages: [
        {
          id: uuid.v4(),
          text: "Mensaje de prueba",
          picture: "https://randomuser.me/api/portraits/men/16.jpg",
          displayName: "Christian Tola",
          username: "ctola",
          date: Date.now() - 180000
        },
        {
          id: uuid.v4(),
          text: "Este es un nuevo mensaje",
          picture: "https://randomuser.me/api/portraits/men/16.jpg",
          displayName: "Christian Tola",
          username: "ctola",
          date: Date.now() - 1800000
        }
      ]
    };
    this.handleSendText = this.handleSendText.bind(this);
    this.handleCloseText = this.handleCloseText.bind(this);
    this.handleOpenText = this.handleOpenText.bind(this);
  }

  handleSendText(event) {
    event.preventDefault();
    let newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split("@")[0],
      displayName: this.props.user.displayName,
      picture: this.props.user.photoURL,
      date: Date.now(),
      text: event.target.text.value
    };

    console.log(newMessage);

    this.setState({
      messages: this.state.messages.concat(newMessage),
      openText: false
    });
  }

  handleCloseText(event) {
    event.preventDefault();
    this.setState({ openText: false });
  }

  handleOpenText(event) {
    event.preventDefault();
    this.setState({ openText: true });
  }

  renderOpenText() {
    if (this.state.openText) {
      return (
        <InputText
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split("@")[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default Main;
