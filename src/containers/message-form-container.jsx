import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageForm from '../components/message-form';
import { addMessage } from '../actions'
import { chat } from '../horizon'

class _MessageFormContainer extends Component {
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

  handleSendMessage(event) {
    const { dispatch } = this.props

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
    dispatch(addMessage(message))
    //chat.store(message);
    this.setState({ text: '' });
  }

  render() {
    return (
      <MessageForm
        author={this.state.author}
        text={this.state.text}
        onAuthorChange={this.handleChangeField.bind(this, 'author')}
        onTextChange={this.handleChangeField.bind(this, 'text')}
        onSendMessage={this.handleSendMessage.bind(this)}
        />
    )
  }
}

const MessageFormContainer = connect()(_MessageFormContainer);
export default MessageFormContainer;
