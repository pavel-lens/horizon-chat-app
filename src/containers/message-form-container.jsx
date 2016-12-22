import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageForm from '../components/message-form';
import { addMessage, storeFormData } from '../actions'
import { chat } from '../horizon'

class _MessageFormContainer extends Component {

  handleChangeField(key, event) {
    const { dispatch } = this.props
    const formData = {
      [key]: event.target.value
    }

    dispatch(storeFormData(formData));
  }

  handleSendMessage(event) {
    const { author, text, dispatch } = this.props

    event.preventDefault();

    if (!author || !text){
      alert('Author and message must be specified!');
      return;
    }

    const message = {
      author: author,
      text: text,
      dtc: new Date(),
    };

    // Store the message and reset the text field
    dispatch(addMessage(message))
    dispatch(storeFormData({text: ''}));
    //chat.store(message);
  }

  render() {
    return (
      <MessageForm
        author={this.props.author}
        text={this.props.text}
        onAuthorChange={this.handleChangeField.bind(this, 'author')}
        onTextChange={this.handleChangeField.bind(this, 'text')}
        onSendMessage={this.handleSendMessage.bind(this)}
        />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    author: state.formData.author,
    text: state.formData.text,
  }
}

const MessageFormContainer = connect(mapStateToProps)(_MessageFormContainer);
export default MessageFormContainer;
