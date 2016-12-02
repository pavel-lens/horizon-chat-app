import React, { Component } from 'react';
import Horizon from '@horizon/client';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import MessageList from './message-list';
import MessageForm from '../components/message-form';

const horizon = Horizon({ secure: false });
const chat = horizon('messages');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    }
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  sendMessage(event) {
    event.preventDefault();
    if (!this.state.author || !this.state.text){
      alert('Author and message must be specified!');
      return;
    }

    const message = {
      author: this.state.author,
      text: this.state.text,
      dtc: new Date(),
    };

    // Store the message and reset the text field
    chat.store(message);
    this.setState({ text: '' });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="chat-container">
          <AppBar title="Chat App"/>
          <MessageList chat={chat}/>
          <MessageForm
            author={this.state.author}
            text={this.state.text}
            onAuthorChange={this.handleChangeField.bind(this, 'author')}
            onTextChange={this.handleChangeField.bind(this, 'text')}
            onSendMessage={this.sendMessage.bind(this)}
            />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
