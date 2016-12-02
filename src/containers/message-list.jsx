import React, { Component } from 'react';

import Message from '../components/message';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.chat = props.chat;
    this.state = {
      conversation: []
     };
   }

   componentDidMount() {
     this.chat.watch().subscribe(
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
     let nodes = this.state.conversation.map(function(message, i){
       return <Message message={message} key={i} />
     });
     return (
       <div className='container-fluid'> {nodes} </div>
    );
  }
}

export default MessageList;
