import React, { Component } from 'react';

export default class MessageForm extends Component {
  render() {
    return (
      <form>
        <div className="center">
          <input onChange={this.props.onAuthorChange} value={this.props.author} placeholder="Author"></input>
          <input onChange={this.props.onTextChange} value={this.props.text} placeholder="Hey there.."></input>
          <button onClick={this.props.onSendMessage}>Send Message</button>
        </div>
      </form>
    )
  }
}
