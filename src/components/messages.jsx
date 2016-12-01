import React, { Component } from 'react';

import Message from './message';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: [{text: 'Hi John!', author: '@svitekpavel'},
              {text: 'Hi there!', author: '@johndoe'},
              {text: 'Whats up with you?', author: '@svitekpavel'},
              {text: "I'm good .. don't worry!", author: '@johndoe'}]
     };
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

export default Messages;
