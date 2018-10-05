import React, { Component } from 'react';

class MessageList extends Component {

    render() {
        return(
            <div>
                {this.props.messages.map(msg => {
                  return (
                    <span>{msg.text}</span>
                  )
                })}
            </div>
        )
    }
}

export default MessageList;