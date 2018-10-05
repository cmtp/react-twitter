import React, { Component } from "react";
import Message from "../Message/Message";
import styles from "./MessageList.module.css";

class MessageList extends Component {
  render() {
    return (
      <div className={styles.root}>
        {this.props.messages.map(msg => {
          return (
            <Message
              key={msg.id}
              text={msg.text}
              picture={msg.picture}
              displayName={msg.displayName}
              username={msg.username}
              date={msg.date}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
