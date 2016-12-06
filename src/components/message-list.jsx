import React, { Component } from 'react';

import Message from './message'

class MessageList extends Component {
   render() {
     const nodes = this.props.messages.map(function(message, i){
       return <Message message={message} key={i} />
     });

     return (
       <div className="messages-container">
         <div className="container-fluid">
           {nodes}
         </div>
       </div>
    )
  }
}

export default MessageList;
