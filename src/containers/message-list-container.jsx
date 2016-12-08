import React, { Component } from 'react'
import { connect } from 'react-redux'

import MessageList from '../components/message-list'

class _MessageListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // conversation: props.messages,
     };
   }



   render() {
     return (
       <MessageList messages={this.props.messages}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  }
}

const MessageListContainer = connect(mapStateToProps)(_MessageListContainer);
export default MessageListContainer;
