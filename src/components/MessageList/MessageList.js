import React, { Component } from "react";
import PropTypes from 'prop-types';
import Message from "../Message/Message";
import styles from "./MessageList.module.css";

const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    OnReplyTweet: PropTypes.func
}

class MessageList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        {this.props.messages
          .map(msg => {
            return (
              <Message
                key={msg.id}
                text={msg.text}
                picture={msg.picture}
                displayName={msg.displayName}
                username={msg.username}
                date={msg.date}
                numRetweets={msg.retweets}
                numFavorites={msg.favorites}
                onRetweet={() => this.props.onRetweet(msg.id)}
                onFavorite={() => this.props.onFavorite(msg.id)}
                onReplyTweet={() => this.props.onReplyTweet(msg.id, msg.username)}
              />
            );
          })
          .reverse()}
      </div>
    );
  }
}

MessageList.propTypes = propTypes;

export default MessageList;
