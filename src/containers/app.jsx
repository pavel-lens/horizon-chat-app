import React, { Component } from 'react';
import Horizon from '@horizon/client';
import MessageList from './message-list';

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
    };

    // Store the message and reset the text field
    chat.store(message);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form>
          <div className="center">
            <input onChange={this.handleChangeField.bind(this, 'author')} value={this.state.author} placeholder="Author"></input>
            <input onChange={this.handleChangeField.bind(this, 'text')} value={this.state.text} placeholder="Hey there.."></input>
            <button onClick={this.sendMessage.bind(this)}>Send Message</button>
          </div>
        </form>
        <MessageList chat={chat}/>
      </div>
    )
  }
}

export default App;
