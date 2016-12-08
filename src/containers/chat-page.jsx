import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import MessageListContainer from './message-list-container';
import MessageFormContainer from './message-form-container';
// import { chat } from '../horizon'

export default class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    // chat
    //  .order('dtc')
    //  .watch()
    //  .subscribe(
    //   (messages) => {
    //     const conversation = messages.map((message) => {
    //       return message;
    //     });
    //     this.setState({
    //       conversation: messages
    //     });
    //   }
    // );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="chat-container">
          <AppBar title="Chat App"/>
          <MessageListContainer/>
          <MessageFormContainer/>
        </div>
      </MuiThemeProvider>
    )
  }
}
