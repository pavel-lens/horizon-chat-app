import React, { Component } from 'react';

import MessageList from '../components/message-list';

class MessageListContainer extends Component {
  constructor(props) {
    super(props);
    this.chat = props.chat;
    this.state = {
      conversation: []
     };
   }

   componentDidMount() {
     this.chat
      .order('dtc')
      .watch()
      .subscribe(
       (messages) => {
         const conversation = messages.map((message) => {
           return message;
         });
         this.setState({
           conversation: messages
         });
       }
     );
   }

   render() {
     return (
       <MessageList messages={this.state.conversation}/>
    );
  }
}

export default MessageListContainer;
